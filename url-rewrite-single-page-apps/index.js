function handler(event) {
    var request = event.request;
    var uri = request.uri;
    
    // Check whether the URI is missing a file name.
    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    } 
    // Check whether the URI is missing a file extension.
    else if (!uri.includes('.')) {
        var response = {
            statusCode: 302,
            statusDescription: 'Moved Permanently',
            headers: {
               'location': { value: uri + '/' }
            }
        };
        return response;
    }

    return request;
}
