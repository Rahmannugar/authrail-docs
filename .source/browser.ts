// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"core/01-core-concepts.mdx": () => import("../content/docs/core/01-core-concepts.mdx?collection=docs"), "core/02-middleware.mdx": () => import("../content/docs/core/02-middleware.mdx?collection=docs"), "core/03-advanced-patterns.mdx": () => import("../content/docs/core/03-advanced-patterns.mdx?collection=docs"), "getting-started/01-introduction.mdx": () => import("../content/docs/getting-started/01-introduction.mdx?collection=docs"), "getting-started/02-quick-start.mdx": () => import("../content/docs/getting-started/02-quick-start.mdx?collection=docs"), "reference/01-api-reference.mdx": () => import("../content/docs/reference/01-api-reference.mdx?collection=docs"), "reference/02-debugging.mdx": () => import("../content/docs/reference/02-debugging.mdx?collection=docs"), "reference/03-clarifications.mdx": () => import("../content/docs/reference/03-clarifications.mdx?collection=docs"), "integrations/01-react-integration.mdx": () => import("../content/docs/integrations/01-react-integration.mdx?collection=docs"), "integrations/02-server-usage.mdx": () => import("../content/docs/integrations/02-server-usage.mdx?collection=docs"), }),
};
export default browserCollections;