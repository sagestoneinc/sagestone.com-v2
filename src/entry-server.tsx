import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./app/App";

export { routeMeta, notFoundMeta, renderHeadTags, renderSitemap } from "./app/content/seo";

/** Render a route to HTML, waiting for lazy route chunks to resolve. */
export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let html = "";
    const stream = renderToPipeableStream(
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>,
      {
        onAllReady() {
          const sink = new PassThrough();
          sink.on("data", (chunk) => (html += chunk));
          sink.on("end", () => resolve(html));
          stream.pipe(sink);
        },
        onShellError: reject,
        onError: reject,
      },
    );
  });
}
