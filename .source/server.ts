// @ts-nocheck
import * as __fd_glob_10 from "../content/docs/server-usage.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/react-integration.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/quick-start.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/middleware.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/introduction.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/debugging.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/core-concepts.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/clarifications.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/api-reference.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/advanced-patterns.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, }, {"advanced-patterns.mdx": __fd_glob_1, "api-reference.mdx": __fd_glob_2, "clarifications.mdx": __fd_glob_3, "core-concepts.mdx": __fd_glob_4, "debugging.mdx": __fd_glob_5, "introduction.mdx": __fd_glob_6, "middleware.mdx": __fd_glob_7, "quick-start.mdx": __fd_glob_8, "react-integration.mdx": __fd_glob_9, "server-usage.mdx": __fd_glob_10, });