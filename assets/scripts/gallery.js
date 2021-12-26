/*
        The art gallery grid.
*/

let c1 = document.getElementById('column1');
let c2 = document.getElementById('column2');
let c3 = document.getElementById('column3');

let deviation = Math.round(artUnorganized.length / 3)

function buildGrid(y){
    // y is the deviation
    for (i = 0; i < y; i++) {
        c1.innerHTML += `<img loading="lazy" draggable="false" alt="${artUnorganized[i][0]}" src="${artUnorganized[i][1]}" title="${artUnorganized[i][0]}">`
    }
    for (i = y; i < y*2; i++) {
        c2.innerHTML += `<img loading="lazy" draggable="false" alt="${artUnorganized[i][0]}" src="${artUnorganized[i][1]}" title="${artUnorganized[i][0]}">`
    }
    for (i = y*2; i < artUnorganized.length; i++) {
        c3.innerHTML += `<img loading="lazy" draggable="false" alt="${artUnorganized[i][0]}" src="${artUnorganized[i][1]}" title="${artUnorganized[i][0]}">`
    }

}

buildGrid(deviation)
