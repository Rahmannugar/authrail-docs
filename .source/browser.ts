// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"advanced-patterns.mdx": () => import("../content/docs/advanced-patterns.mdx?collection=docs"), "api-reference.mdx": () => import("../content/docs/api-reference.mdx?collection=docs"), "clarifications.mdx": () => import("../content/docs/clarifications.mdx?collection=docs"), "core-concepts.mdx": () => import("../content/docs/core-concepts.mdx?collection=docs"), "debugging.mdx": () => import("../content/docs/debugging.mdx?collection=docs"), "introduction.mdx": () => import("../content/docs/introduction.mdx?collection=docs"), "middleware.mdx": () => import("../content/docs/middleware.mdx?collection=docs"), "quick-start.mdx": () => import("../content/docs/quick-start.mdx?collection=docs"), "react-integration.mdx": () => import("../content/docs/react-integration.mdx?collection=docs"), "server-usage.mdx": () => import("../content/docs/server-usage.mdx?collection=docs"), }),
};
export default browserCollections;