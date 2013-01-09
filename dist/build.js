var someNameSpace;
(function (someNameSpace) {
    (function (WebRequest) {
        function requestImage(date) {
            return "";
        }
        WebRequest.requestImage = requestImage;
    })(someNameSpace.WebRequest || (someNameSpace.WebRequest = {}));
    var WebRequest = someNameSpace.WebRequest;
})(someNameSpace || (someNameSpace = {}));
