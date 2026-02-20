import { notFound, redirect } from "next/navigation";
import { source } from "@/lib/source";
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/page";
import type { Metadata } from "next";

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  // Visiting /docs (no slug)
  if (!slug || slug.length === 0) {
    const tree = source.pageTree;
    const firstPageUrl = findFirstPage(tree.children);
    if (firstPageUrl) {
      redirect(firstPageUrl);
    }
    // If no pages exist, show 404
    notFound();
  }

  const page = source.getPage(slug);
  if (!page) {
    redirect("/docs");
  }

  const Content = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <Content />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) return {};

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description,
    },
  };
}

export function generateStaticParams() {
  return source.generateParams();
}

// Helper to find the first page in the tree
function findFirstPage(nodes: any[]): string | undefined {
  for (const node of nodes) {
    if (node.type === "page") return node.url;
    if (node.type === "folder") {
      const url = findFirstPage(node.children);
      if (url) return url;
    }
  }
}
