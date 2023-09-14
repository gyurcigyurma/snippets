var addAnyText = function () {
    const div = document.createElement("div");
    const randomText = document.createTextNode("Added this text");
    div.appendChild(randomText);
    document.body.appendChild(div);
}

function debounce(fn, time) {
    let setTimeoutId;

    return function () {
        if (setTimeoutId) {
            clearTimeout(setTimeoutId);
        }

        setTimeoutId = setTimeout(() => {
            fn.apply(this, arguments);
            setTimeoutId = null;
        }, time)
    }
}

document.addEventListener("click", debounce(addAnyText, 400));
