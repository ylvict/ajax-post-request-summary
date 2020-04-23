((url) => {
    var x = document.createElement("script");
    x.src = url;
    document.head.append(x);
})("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.js");

((url) => {
    var x = document.createElement("script");
    x.src = url;
    document.head.append(x);
})("https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.js");

var run = request => {
    request.method = "POST";
    request.url = `https://httpbin.org/post?${request.url}`;
    $.ajax((r => {
        r.url += "&jq";
        return r;
    })({ ...request }));
    axios((r => {
        r.url += "&axios";
        r.contentType && (r.headers = { 'Content-Type': r.contentType });
        delete r.contentType;
        return r;
    })({ ...request }));
};

var runFetch = r => {
    var req = {
        method: "POST",
        body: r.data
    };
    r.contentType && (req.headers = { 'Content-Type': r.contentType });
    fetch(`https://httpbin.org/post?${r.url}&fetch`, req)
};

window.setTimeout(function () {
    run({
        data: { a: 1 },
        url: "default&obj",
    });
    run({
        data: { a: 1 },
        url: "appjson&obj",
        contentType: "application/json"
    });
    run({
        data: { a: 1 },
        url: "urlencode&obj",
        contentType: "application/x-www-form-urlencoded"
    });
    run({
        data: { a: 1 },
        url: "txtjson&obj",
        contentType: "text/json"
    });
    run({
        data: JSON.stringify({ a: 1 }),
        url: "default&stringify",
    });
    run({
        data: JSON.stringify({ a: 1 }),
        url: "appjson&stringify",
        contentType: "application/json"
    });
    run({
        data: JSON.stringify({ a: 1 }),
        url: "urlencode&stringify",
        contentType: "application/x-www-form-urlencoded"
    });
    run({
        data: JSON.stringify({ a: 1 }),
        url: "txtjson&stringify",
        contentType: "text/json"
    });
}, 1000);

window.setTimeout(function () {
    runFetch({
        data: { a: 1 },
        url: "default&obj"
    });
    runFetch({
        data: { a: 1 },
        url: "appjson&obj",
        contentType: "application/json"
    });
    runFetch({
        data: { a: 1 },
        url: "txtjson&obj",
        contentType: "text/json"
    });
    runFetch({
        data: { a: 1 },
        url: "urlencode&obj",
        contentType: "application/x-www-form-urlencoded"
    });

    runFetch({
        data: JSON.stringify({ a: 1 }),
        url: "default&stringify"
    });
    runFetch({
        data: JSON.stringify({ a: 1 }),
        url: "appjson&stringify",
        contentType: "application/json"
    });
    runFetch({
        data: JSON.stringify({ a: 1 }),
        url: "txtjson&stringify",
        contentType: "text/json"
    });
    runFetch({
        data: JSON.stringify({ a: 1 }),
        url: "urlencode&stringify",
        contentType: "application/x-www-form-urlencoded"
    });

    var form = document.createElement("form");
    form.append(((x) => { x.name = "a"; x.type = "text"; x.value = "1"; return x; })(document.createElement("input")));
    var formData = new FormData(form);
    runFetch({
        data: formData,
        url: "default&formData"
    });
    runFetch({
        data: formData,
        url: "appjson&formData",
        contentType: "application/json"
    });
    runFetch({
        data: formData,
        url: "txtjson&formData",
        contentType: "text/json"
    });
    runFetch({
        data: formData,
        url: "urlencode&formData",
        contentType: "application/x-www-form-urlencoded"
    });

    var params = new URLSearchParams({a:1});
    runFetch({
        data: params,
        url: "default&params"
    });
    runFetch({
        data: params,
        url: "appjson&params",
        contentType: "application/json"
    });
    runFetch({
        data: params,
        url: "txtjson&params",
        contentType: "text/json"
    });
    runFetch({
        data: params,
        url: "urlencode&params",
        contentType: "application/x-www-form-urlencoded"
    });
}, 2000);