function load_home() {
    document.getElementById("content")
        .innerHTML = '<object type="text/html" data="pages/home.html"></object>';
}

function load_page(page) {
    document.getElementById("content")
        .innerHTML = `<object type="text/html" data="pages/${page}.html"></object>`;
}