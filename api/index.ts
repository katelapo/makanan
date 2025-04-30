interface Env {
    ASSETS: Fetcher;
  }
  
  export default {
    fetch(request, env) {
      const url = new URL(request.url);
  
      if (url.pathname.startsWith("/api/index.ts")) {
        return Response.json([
          
        ]);
      }
  
      return env.ASSETS.fetch(request);
    },
  } satisfies ExportedHandler<Env>;