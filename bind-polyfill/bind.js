Function.prototype.bind = function (context) {
    console.log('custom bind');

    const fn = this;

    return function () {
        fn.call(context);
    }
}

const foo = function () {
    console.log(this.bar);
}

let baz = foo.bind({ bar: "helllo" });
baz();
