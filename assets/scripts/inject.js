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
        document.body.style.setProperty("font-size", "0.9em");
    } else {
        document.body.style.setProperty("font-family", "sans-serif");
        document.body.style.setProperty("font-size", "1em");
    }
});
var checkbox2 = document.querySelector("input[name=theme]");
checkbox2.addEventListener('change', function() {
    if (this.checked == true) {
        document.documentElement.style.setProperty("--text-color", theme.light);
        document.documentElement.style.setProperty("--back-color", theme.dark);

        //document.documentElement.style.setProperty("--grad-color", '#b7a4c0');
        //document.documentElement.style.setProperty("--grad-color2", '#e2b2da');
    } else {
        document.documentElement.style.setProperty("--text-color", theme.dark);
        document.documentElement.style.setProperty("--back-color", theme.light);

        //document.documentElement.style.setProperty("--grad-color", '#110716');
        //document.documentElement.style.setProperty("--grad-color2", '#352833');
    }
});
