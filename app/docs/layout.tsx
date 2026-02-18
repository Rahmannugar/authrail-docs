import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import Image from "next/image";
import {
  Rocket,
  BookOpen,
  Puzzle,
  Library,
  ShieldCheck,
  Zap,
  Server,
  Cpu,
  Atom,
  type LucideIcon,
} from "lucide-react";
type PageTreeRoot = typeof source.pageTree;
type PageTreeNode = PageTreeRoot["children"][number];

const icons: Record<string, LucideIcon> = {
  "getting-started": Rocket,
  core: Cpu,
  integrations: Puzzle,
  reference: Library,
  introduction: BookOpen,
  "quick-start": Zap,
  middleware: ShieldCheck,
  "server-usage": Server,
  "core-concepts": Cpu,
  "advanced-patterns": Puzzle,
  debugging: ShieldCheck,
  clarifications: BookOpen,
  "api-reference": Library,
  "react-integration": Atom,
  react: Atom,
};

function enhanceTree(tree: PageTreeRoot): PageTreeRoot {
  function mapNode(node: PageTreeNode): PageTreeNode {
    if (node.type === "page" || node.type === "folder") {
      const url = "url" in node ? node.url : undefined;
      const name = "name" in node ? node.name : "";

      const key = url
        ? url.split("/").pop()
        : name
          ? String(name).toLowerCase().replace(/\s+/g, "-")
          : "";

      const IconComponent = icons[key || ""];

      const newNode = { ...node } as any;
      if (IconComponent) {
        newNode.icon = <IconComponent size={18} />;
      }

      if (node.type === "folder" && node.children) {
        newNode.children = node.children.map(mapNode);
      }
      return newNode;
    }
    return node;
  }

  return {
    ...tree,
    children: tree.children.map(mapNode),
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const enhancedTree = enhanceTree(source.pageTree);

  return (
    <RootProvider theme={{ enabled: true, defaultTheme: "dark" }}>
      <DocsLayout
        tree={enhancedTree}
        nav={{
          title: (
            <div className="flex items-center">
              <Image
                src="/authrail.png"
                alt="AuthRail"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
              <span className="font-bold text-lg tracking-tight text-white">
                <span className="text-fd-primary">Auth</span>Rail
              </span>
            </div>
          ),
          transparentMode: "top",
        }}
        sidebar={{
          footer: <div className="p-4" />,
        }}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
