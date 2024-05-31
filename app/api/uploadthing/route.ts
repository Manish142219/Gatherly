// app/api/uploadthing/route.ts
import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

console.log("Route handler initialized");

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  // Apply an (optional) custom config:
  // config: { ... },
});

console.log("Route handler set up with GET and POST");
