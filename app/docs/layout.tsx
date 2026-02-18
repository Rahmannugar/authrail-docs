import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import {
  Rocket,
  BookOpen,
  Puzzle,
  Library,
  ShieldCheck,
  Zap,
  Server,
  Cpu,
} from "lucide-react";
// Infer types from source to avoid import issues
type PageTreeRoot = typeof source.pageTree;
type PageTreeNode = PageTreeRoot["children"][number];

// Icon mapping
const icons: Record<string, React.ReactNode> = {
  "getting-started": <Rocket size={18} />,
  core: <Cpu size={18} />,
  integrations: <Puzzle size={18} />,
  reference: <Library size={18} />,
  introduction: <BookOpen size={18} />,
  "quick-start": <Zap size={18} />,
  middleware: <ShieldCheck size={18} />,
  "server-usage": <Server size={18} />,
  "core-concepts": <Cpu size={18} />,
  "advanced-patterns": <Puzzle size={18} />,
  debugging: <ShieldCheck size={18} />,
  clarifications: <BookOpen size={18} />,
  "api-reference": <Library size={18} />,
};

function enhanceTree(tree: PageTreeRoot): PageTreeRoot {
  function mapNode(node: PageTreeNode): PageTreeNode {
    if (node.type === "page" || node.type === "folder") {
      const n = node as any;
      const key = n.url
        ? n.url.split("/").pop()
        : n.name
          ? String(n.name).toLowerCase().replace(/\s+/g, "-")
          : "";

      let icon = icons[key || ""];

      // Fallback for tricky folder names if needed
      if (!icon && n.type === "folder" && n.name === "Core & Concepts") {
        icon = icons["core"];
      }

      // Cast to any to inject icon if types prevent it
      const newNode: any = { ...node };
      if (icon) newNode.icon = icon;

      if (n.type === "folder" && n.children) {
        newNode.children = n.children.map(mapNode as any);
      }
      return newNode;
    }
    return node;
    return node;
  }

  return {
    ...tree,
    children: tree.children.map(mapNode as any),
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const enhancedTree = enhanceTree(source.pageTree);

  return (
    <RootProvider theme={{ enabled: false }}>
      <DocsLayout
        tree={enhancedTree}
        nav={{
          title: (
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">
                <span className="text-fd-primary">Auth</span>Rail
              </span>
            </div>
          ),
        }}
        sidebar={{
          footer: <></>, // Use Fragment to ensure completely empty
        }}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
