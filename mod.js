addEventListener("fetch", (event) => {
  // const json = JSON.stringify({
  //   message: "Hello from Deno Deploy",
  // });

  const json = JSON.stringify({
    message: "Hello from Deno Deploy",
    url: event.request.url,
    method: event.request.method,
    proto: event.request.proto,
    headers: Object.fromEntries(event.request.headers.entries())
  }, null, 2);


  const response = new Response(json, {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });

  event.respondWith(response);
});
