import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export interface ConstructSeoProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function constructSeo({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  canonical,
  keywords = siteConfig.keywords,
  noIndex = false,
}: ConstructSeoProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const canonicalUrl = canonical ? `${siteConfig.url}${canonical}` : siteConfig.url;
  const ogImageUrl = image.startsWith("http") ? image : `${siteConfig.url}${image}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
    creator: siteConfig.author.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
      creator: siteConfig.links.twitter,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
