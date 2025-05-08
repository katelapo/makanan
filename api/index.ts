interface Env {
    ASSETS: Fetcher;
    DB: D1Database;
  }
  
  export default {
    fetch(request, env) {
    async fetch(request, env) {
      const url = new URL(request.url);
  
      if (url.pathname.startsWith("/api/index.ts")) {
        let { results } = await env.DB.prepare("SELECT * FROM events").all();
        return Response.json(results);
       }
      }
  
      return env.ASSETS.fetch(request);
    },
  } satisfies ExportedHandler<Env>;