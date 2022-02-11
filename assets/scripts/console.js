/*
    Rodrick hates their life.
--------------------------- # # # # #
	Console log custom group.
*/

let credit = {
	emoji: "💀♡",
	name: 'This site',
    author: author.name,
	description: [
        "--------------------------------",
        "✨Trans Rights has been and will always be Human Rights!✨",
        "♡ POC lives will always matter! ♡",
		"Be gay, do crime! /j"
    ]
}


if (credit != null){
	console.group("💀♡ Lookin' under the hood? ♡💀")
	console.log(
		"%c"+ credit.name + " belongs to " + author.name, "font-style: italic;"
	)
	let z;
    for (z = 0; z < credit.description.length; z++) {
		console.log(credit.description[z])
    }


	console.groupEnd()
}
