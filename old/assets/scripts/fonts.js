
// Changing the fonts (insert peace sign)
var checkbox = document.querySelector("input[name=dyslexic]");

checkbox.addEventListener('change', function() {
    if (this.checked == true) {
        document.body.style.setProperty("font-family", "'OpenDyslexic', sans-serif");
        document.documentElement.style.setProperty("--mono", "'OpenDyslexic', sans-serif");
        document.getElementById('FontTog1').style.setProperty("opacity", "1");
        document.getElementById('FontTog2').style.setProperty("opacity", "0");
        document.getElementById('page_h').style.setProperty("line-height", "0.2");
    } else {
        document.body.style.setProperty("font-family", "'Mukta', sans-serif");
        document.documentElement.style.setProperty("--mono", "monospace");
        document.getElementById('FontTog1').style.setProperty("opacity", "0");
        document.getElementById('FontTog2').style.setProperty("opacity", "1");
        document.getElementById('page_h').style.setProperty("line-height", "normal");
    }
});
