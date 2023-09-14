function throttle(fn, time) {
    let setTimeoutId;

    return function () {
        if (setTimeoutId) {
            return;
        }

        setTimeoutId = setTimeout(() => {
            fn.apply(this, arguments);
            setTimeoutId = null;
        }, time)
    }
}
