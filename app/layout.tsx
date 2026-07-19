import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "www.roottorise-therapy.net";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const baseUrl = new URL(`${protocol}://${host}`);
  const title = "Root to Rise Therapy | Compassionate Care in Modesto";
  const description =
    "Evidence-based therapy for children, teens, adults, couples, and families in Stanislaus and San Joaquin Counties.";

  return {
    metadataBase: baseUrl,
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: baseUrl,
      images: [{ url: "/og.png", width: 1731, height: 909, alt: "Root to Rise Therapy" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.variable}>{children}</body>
    </html>
  );
}
