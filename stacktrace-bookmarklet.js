javascript:(function (w, d, c, s, e, i) {
    c = d.createElement('div');
    s = c.style;
    s.position = 'fixed';
    s.top = '0';
    s.right = '0';
    s.backgroundColor = '#ddd';
    s.padding = '0.3em';
    s.margin = '0 auto';

    e = d.createElement('span');
    s = e.style;
    s.fontWeight = 'bold';
    s.marginRight = '1em';
    e.innerHTML = 'Javascript%20Stacktrace:';
    c.appendChild(e);

    e = d.createElement('input');
    e.type = 'button';
    e.value = 'Load%20stacktrace.js';
    e.style.marginRight = '1em';
    e.onclick = function (e, s) {
        s = d.createElement('script');
        s.type = 'text/javascript';
        s.src = '//rawgithub.com/stacktracejs/stacktrace.js/master/stacktrace.js';
        (d.head || d.getElementsByTagName('head')[0]).appendChild(s);
    };
    c.appendChild(e);

    e = d.createElement('input');
    e.type = 'button';
    e.value = 'Attach%20to%20window.onerror';
    e.style.marginRight = '1em';
    e.onclick = function () {
        w.onerror = function () {
            alert(printStackTrace().join('\n'))
        }
    };
    c.appendChild(e);

    i = d.createElement('input');
    i.type = 'text';
    c.appendChild(i);

    e = d.createElement('input');
    e.type = 'button';
    e.value = 'Attach%20to%20custom%20function';
    e.style.marginRight = '2em';
    e.onclick = function (e, fn) {
        fn = i.value;
        eval('_old_' + fn + '=' + fn + ';' + fn + '=function(){alert(printStackTrace().join("\\n"));_old_' + fn + '.apply(this,arguments);}')
    };
    c.appendChild(e);

    e = d.createElement('a');
    e.onclick = function () {
        c.parentNode.removeChild(c)
    };
    s = e.style;
    s.textDecoration = 'none';
    s.cursor = 'pointer';
    e.innerHTML = '&#215;';
    c.appendChild(e);

    (d.body || d.getElementsByTagName('body')[0]).appendChild(c);
})(window, document);