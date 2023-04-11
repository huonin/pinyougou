function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
       /*  console.log(step);
        console.log(Math.ceil(step));
        console.log(Math.floor(step)); */
        // 回调函数

        if (callback) {
            callback()
        }

        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 10);
}
