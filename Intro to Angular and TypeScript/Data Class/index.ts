class HTTP {

    method: string;
    uri: string;
    version: string;
    message: string;
    response: string;
    fulfilled: boolean;
    
    constructor(method: string, uri: string, version: string, message: string ) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = 'undefined';
        this.fulfilled = false

    }

}

let data: HTTP = new HTTP ('GET', 'http://google.com', 'HTTP/1.1', ' ');

console.log(data);


