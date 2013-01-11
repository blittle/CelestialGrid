
var someNameSpace;
(function (someNameSpace) {
    (function (WebRequest) {
        function requestImage(date) {
            return "someValue";
        }
        WebRequest.requestImage = requestImage;
    })(someNameSpace.WebRequest || (someNameSpace.WebRequest = {}));
    var WebRequest = someNameSpace.WebRequest;
})(someNameSpace || (someNameSpace = {}));

define("build", function(){});
