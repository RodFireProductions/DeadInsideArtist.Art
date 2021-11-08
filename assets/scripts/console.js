/*
    Rodrick hates their life.
--------------------------- # # # # #
*/

// Feel free to change the default settings! ♡
let credit = {
	emoji: "○",
	name: siteName,
    author: author.name,
	description: [
        "--------------------------------",
        "✨Trans Rights has been and will always be Human Rights!✨",
        "♡ POC lives will always matter! ♡"
    ]
}

// I wouldn't recommend touching this!

if (credit != null){
	console.group("Lookin' under the hood?")
	console.log(
		credit.emoji+" %c"+ credit.name + " is by and belongs to " + author.name +" "+credit.emoji, "font-style: italic;"
	)
	let z;
    for (z = 0; z < credit.description.length; z++) {
		console.log(credit.description[z])
    }


	console.groupEnd()
}
