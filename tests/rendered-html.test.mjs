import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Root to Rise homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Root to Rise Marriage Family Therapy/i);
  assert.match(html, /Therapy that meets you/);
  assert.match(html, /Schedule a consultation/);
  assert.match(html, /Serving Stanislaus &amp; San Joaquin Counties/);
  assert.match(html, /209-490-2870/);
  assert.match(html, /Ketamine-Assisted Therapy \(KAT\)/);
  assert.match(html, /Visit CareCredit/);
  assert.match(html, /\/therapists\/angela-pacheco/);
  assert.doesNotMatch(html, /627 13th Street|209-645-8630/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("renders therapist profiles with their external profile and office photos", async () => {
  const response = await render("/therapists/jennifer-boss-kinser");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Jennifer Boss Kinser/);
  assert.match(html, /Psychology Today profile/);
  assert.match(html, /office-counseling-room-3\.jpg/);
  assert.match(html, /office-counseling-room-4\.jpg/);
  assert.doesNotMatch(html, /office-counseling-room-1\.jpg/);
});

test("production source does not depend on preview scaffolding", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|_sites-preview|codex-preview/);
  assert.doesNotMatch(layout, /SkeletonPreview|_sites-preview|codex-preview/);
});
