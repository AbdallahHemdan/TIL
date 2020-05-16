## Explain The Request-Response life cycle

> If you go to www.google.com the following happens

> 1. First the browser needs to translate www.google.com to an IP address 
> - If it does not already know it. If it knows it, nothing happens at this point.
> - If it does not know it, it contacts a DNS server to resolve the name.


> 2. Then browser will open a TCP connection to the IP address of www.google.com and send a HTTP GET request over.

> 3. The server will get this HTTP request. It will somehow generate a HTTP response and send that back trough the TCP connection as a series of small chunks called data packets.

> 4. When the response is sent the connection is closed.

> 5. When the browser gets the response, it typically assembles the small chunks into a complete website and renders it on screen. The HTTP request is now done.



References
1. https://stackoverflow.com/questions/4814514/http-request-life-cycle
2. https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works
