var HTTP = /** @class */ (function () {
    function HTTP(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = 'undefined';
        this.fulfilled = false;
    }
    return HTTP;
}());
var data = new HTTP('GET', 'http://google.com', 'HTTP/1.1', ' ');
console.log(data);
