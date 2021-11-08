credit({
	emoji: "🖤",
	name: "Howdy Explorer!",
    author: "Rodrick 'RodFireProductions'",
	version: "I see you~",
	description: ["I see you're looking under the hood of my site.", "Caught ya redhanded, didn't I?", "✨Trans Rights has and will always be Human Rights!✨", "Love,", "Rodrick 'Your Demigod'"],
	//licences: {
	//	self: "2021"
	//	}
});

// Thank you Elliot Herriman for making this cool credit code. Very nice. Very nice.

function throwIntoVoid(func, ...parameters)
{
	setTimeout(func.bind(console, ...parameters));
}

function credit(credits)
{
	const licences = {mit: MIT, self: self}

	if (credits && credits.name)
	{
		throwIntoVoid(console.groupCollapsed, (credits.emoji ? credits.emoji + " " : "") + credits.name + (credits.version ? " %c[" + credits.version + "]": "%c"), "color: grey");

		if (credits.description)
		{
			if (typeof credits.description === "string")
			{
				print(credits.description);
			}
			else
			{
				credits.description.forEach((line) => print(line));
			}
		}

		if (credits.licences)
		{
			var licenceTypes = Object.keys(credits.licences).length;

			throwIntoVoid(console.groupCollapsed, (licenceTypes > 1 ? "Licences" : "Licence"));

			for (var type in credits.licences)
			{
				if (typeof credits.licences[type] === "string")
				{
					licence(type);
					continue;
				}

				for (var item in credits.licences[type])
				{
					licence(type, item);
				}
			}
			throwIntoVoid(console.groupEnd);;
		}

		throwIntoVoid(console.groupEnd);
	}

	function licence(type, item)
	{
		if (type != "self" || licenceTypes > 1)
		{
			throwIntoVoid(console.groupCollapsed, item || credits.name);
		}

		if (licences[type])
		{
			throwIntoVoid(console.log, licences[type](credits.licences[type][item] || ""));
		}
		else
		{
			throwIntoVoid(console.log, item);;
		}
		if (type != "self" || licenceTypes > 1)
		{
			throwIntoVoid(console.groupEnd);
		}
	}

	function print(line)
	{
		if (typeof line == "string")
		{
			throwIntoVoid(console.log, line);
		}
		else if (line.length)
		{
			throwIntoVoid(console.log.apply, line);
		}
	}

	function self()
	{
		return MIT(credits.licences.self + (credits.author ? " " + credits.author : ""));
	}

	function MIT(text)
	{
		if (!text) return;

		return 'Copyright (c) ' + text + '\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
	}
}
