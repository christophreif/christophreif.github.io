function createItem(name, link) {
    var a = document.createElement('a');
    a.innerHTML = name;
    a.href = link;

    var li = document.createElement('li');
    li.appendChild(a);

    return li;
}

function createMenu() {

    var items = {
        "cel": "./cel.html",
        "bio": "./bio.html",
        "books": "./books.html",
        "essays": "./essays.html",
        "history": "./hist.html",
        "poeple": "./people.html",
        "quotes": "./quotes.html,
    };

    let nav = document.getElementById('menu');
    var ul = document.createElement('ul');
    nav.appendChild(ul);

    Object
        .keys(items)
        .forEach(function(key) {
            ul.appendChild(createItem(key, items[key]));
        });
}

createMenu();
