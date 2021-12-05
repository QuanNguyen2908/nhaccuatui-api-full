addEventListener('fetch', event => {
  event.respondWith(handleRequest(event))
})

async function handleRequest(event) {
    const urlObj = new URL(event.request.url);
    const pathname = urlObj.pathname.slice(1);
    const search = urlObj.search;
    const url = (pathname + search).replace("https:/", "https://").replace("http:/", "http://");

    if (!url) return new Response("Just go to /:url to use the proxy. All http method is supported", {
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    });

    const request = new Request(url, {
        method: event.request.method,
        headers: event.request.headers,
        body: event.request.body
    })

    let response = await fetch(request);

    response = new Response(response.body, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": response.headers.get("Content-Type")
        }
    })

    return response;
} 
