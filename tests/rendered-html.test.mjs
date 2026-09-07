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
  assert.match(html, /Ketamine Assistance Psychotherapy \(KAP\)/);
  assert.doesNotMatch(html, /Ketamine-Assisted Therapy|\(KAT\)/);
  assert.match(html, /Client access links/);
  assert.match(html, /href="https:\/\/www.journeyclinical.com\/kap-101"/);
  assert.match(html, /href="https:\/\/www.therapyportal.com\/p\/therapy38\/login\/"/);
  assert.match(html, /href="https:\/\/www.carecredit.com\/apply\/"/);
  assert.doesNotMatch(html, /hero-art|hero-logo-card|portrait-shape|growth-line/);
  assert.match(html, /class="hero-logo"[^>]*src="\/brand\/root-to-rise-logo.png"/);
  assert.match(html, /\/therapists\/angela-pacheco/);
  assert.doesNotMatch(html, /627 13th Street|209-645-8630/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
  assert.match(html, /office-waiting-area.jpg/);
  assert.match(html, /office-hallway.jpg/);
  assert.doesNotMatch(html, /office-counseling-room|office-reception-area/);
});

test("keeps each clinician's Headway link and office photos correctly assigned", async () => {
  const assignments = [
    { slug: "angela-pacheco", provider: "angela-pacheco-2", campaign: "202414", photos: [2] },
    { slug: "arthur-d-tolbert-jr", provider: "arthur-tolbert-4", campaign: "202416", photos: [1] },
    { slug: "jennifer-boss-kinser", provider: "jennifer-boss-kinser-3", campaign: "202409", photos: [3, 4] },
    { slug: "jasmine-olvera", provider: "jasmine-olvera-2", campaign: "202418", photos: [5, 6] },
  ];
  for (const { slug, provider, campaign, photos } of assignments) {
    const response = await render(`/therapists/${slug}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.ok(html.includes(`href="https://care.headway.co/providers/${provider}?utm_source=pem&amp;utm_medium=direct_link&amp;utm_campaign=${campaign}"`));
    assert.match(html, /Headway profile/);
    assert.match(html, /Psychology Today profile/);
    assert.match(html, /href="\/#client-access"/);
    for (let number = 1; number <= 6; number++) {
      const pattern = new RegExp(`office-counseling-room-${number}\\.jpg`);
      if (photos.includes(number)) assert.match(html, pattern);
      else assert.doesNotMatch(html, pattern);
    }
  }
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
