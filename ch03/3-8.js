var obj={
    methodA: function () { console.log(this); },
    inner: {
        methodB: function () { console.log(this); }
    }
};
obj.methodA();
obj['method']();

obj.inner.methodB();
obj.inner['method']();
obj['inner'].methodB();
obj['inner']['method']();