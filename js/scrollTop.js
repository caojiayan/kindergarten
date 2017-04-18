//返回顶部
function rt() {
    var d = document,
        dd = document.documentElement,
        db = document.body,
        top = dd.scrollTop || db.scrollTop,
        step = Math.floor(top / 20);
       (function() {
           top -= step;
           if (top > -step) {
               dd.scrollTop == 0 ? db.scrollTop = top: dd.scrollTop = top;
               setTimeout(arguments.callee, 20);
           }
       })();
}