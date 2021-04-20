addEventListener("fetch", (event) => {
  const json = JSON.stringify({
    message: "Hello from Deno Deploy",
  });

  const response = new Response(json, {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });


  event.respondWith(response);
});
