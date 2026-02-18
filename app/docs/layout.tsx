import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootProvider theme={{ enabled: false }}>
      <DocsLayout
        tree={source.pageTree}
        nav={{
          enabled: false,
        }}
        sidebar={{
          banner: (
            <Link href="/" className="flex items-center gap-2 px-2 py-4 mb-2">
              <div className="relative w-9 h-9 hover:scale-105 transition-transform">
                <Image
                  src="/authrail.png"
                  alt="AuthRail"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          ),
          footer: <></>,
        }}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
