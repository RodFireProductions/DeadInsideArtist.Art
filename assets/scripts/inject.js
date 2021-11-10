/*
    Rodrick hates their life.
--------------------------- # # # # #
    Injected variables and html
*/

let footer = document.getElementById('footer');
footer.innerHTML += '&#169; Copyright '+ year +' RodFireProductions - All Rights Reserved';

let fontToggle = document.getElementById('toggle');
if (fontToggle != null) {
    fontToggle.innerHTML += `
    <input id="dyslexic" name="dyslexic" type="checkbox" hidden>
    <label for="dyslexic" class="switch dyslexic">
    </label>
    <input id="theme" name="theme" type="checkbox" hidden>
    <label for="theme" class="switch theme">
    </label>
    `
}
var checkbox = document.querySelector("input[name=dyslexic]");
checkbox.addEventListener('change', function() {
    if (this.checked == true) {
        document.body.style.setProperty("font-family", "'OpenDyslexic', sans-serif");
        document.body.style.setProperty("font-size", "1em");
        document.documentElement.style.setProperty("--mono", "'OpenDyslexic', sans-serif");
    } else {
        document.body.style.setProperty("font-family", "'Mukta', sans-serif");
        document.body.style.setProperty("font-size", "1em");
        document.documentElement.style.setProperty("--mono", "monospace");
    }
});
var checkbox2 = document.querySelector("input[name=theme]");
checkbox2.addEventListener('change', function() {
    if (this.checked == true) {
        document.documentElement.style.setProperty("--text-color", theme.light);
        document.documentElement.style.setProperty("--back-color", theme.dark);
    } else {
        document.documentElement.style.setProperty("--text-color", theme.dark);
        document.documentElement.style.setProperty("--back-color", theme.light);
    }
});

let linkPage = document.getElementById('links');
if (linkPage != null) {
    let i;
    for (i = 0; i < socialsShow.length; i++) {
        linkPage.innerHTML += `<button onclick="window.location.href='`+socialsShow[i][1]+`';" type="button" name="`+socialsShow[i][0]+`">`+socialsShow[i][0]+`</button>`
    }
}

let projectGames = document.getElementById('games');
let projectTools = document.getElementById('tools');
let projectWritings = document.getElementById('writings');

function projectCards(x) {
    href = ""
    if (x[1] != null) { href += '<a target="_blank" href="'+x[1][1]+'">'+x[1][0]+'</a> ' }
    if (x[2] != null) { href += '<a target="_blank" href="'+x[2][1]+'">'+x[2][0]+'</a>' }

    warning = ""
    if (x[5] != null) { warning += '<span>Content Warning:</span> '+x[5] }

    team = ""
    if (x[7] != null) {
        if (x[5] != null) {
            team += 'Contribution: '+x[7]+'<br>'
        } else {
            team += 'Contribution: '+x[7]
        }
    }

    dog = `
    <div class="card">
        <div class="card_desc">
            <div>`+x[0]+' | '+href+`</div>
            <p>`+x[3]+`</p>
            <div><b>`+x[4]+`</b></div>
            <div>`+team+warning+`</div>
            <div>`+x[8]+`</div>
        </div>
        <img draggable="false" src="`+x[6]+`" alt="`+x[0]+`">
    </div>
    `
    return dog
}

if (projectGames != null) {
    for (i = 0; i < projects.games.length; i++) {
        projectGames.innerHTML += projectCards(projects.games[i]);
    }
}
if (projectTools != null) {
    for (i = 0; i < projects.tools.length; i++) {
        projectTools.innerHTML += projectCards(projects.tools[i]);
    }
}
if (projectWritings != null) {
    for (i = 0; i < projects.writings.length; i++) {
        projectWritings.innerHTML += projectCards(projects.writings[i]);
    }
}
