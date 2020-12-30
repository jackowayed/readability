(function() {
    readConvertLinksToFootnotes = false;
    readStyle = 'style-newspaper';
    readSize = 'size-medium';
    readMargin = 'margin-wide';
    _readability_script = document.createElement('script');
    _readability_script.type = 'text/javascript';
    _readability_script.src = 'https://jackowayed.github.io/readability/js/readability.js?x=' + (Math.random());
    _readability_script.onload = function() {
        readability.init(true);
    };
    document.documentElement.appendChild(_readability_script);
})();