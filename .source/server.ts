// @ts-nocheck
import * as __fd_glob_10 from "../content/docs/integrations/02-server-usage.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/integrations/01-react-integration.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/reference/03-clarifications.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/reference/02-debugging.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/reference/01-api-reference.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/getting-started/02-quick-start.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/getting-started/01-introduction.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/core/03-advanced-patterns.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/core/02-middleware.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/core/01-core-concepts.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, }, {"core/01-core-concepts.mdx": __fd_glob_1, "core/02-middleware.mdx": __fd_glob_2, "core/03-advanced-patterns.mdx": __fd_glob_3, "getting-started/01-introduction.mdx": __fd_glob_4, "getting-started/02-quick-start.mdx": __fd_glob_5, "reference/01-api-reference.mdx": __fd_glob_6, "reference/02-debugging.mdx": __fd_glob_7, "reference/03-clarifications.mdx": __fd_glob_8, "integrations/01-react-integration.mdx": __fd_glob_9, "integrations/02-server-usage.mdx": __fd_glob_10, });