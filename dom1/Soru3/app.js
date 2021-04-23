function ozelliklerial() {
    var özellikler = document.body.children[0].children[0];
    var i = 0;
    while (i < document.body.children[0].children[0].attributes.length) {
        console.log(özellikler.getAttribute(özellikler.attributes[i].name));
        i++;
    }
}