function walkDOM(n) {
    do {
        console.log(n);
        if (n.hasChildNodes()) {
            walkDOM(n.firstChild);
        }
    } while (n = n.nextSibling);
}


walkDOM(document.body);