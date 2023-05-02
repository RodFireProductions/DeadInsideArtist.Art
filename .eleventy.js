const fs = require("fs");
const NOT_FOUND_PATH = "_site/404/index.html";
const isDev = process.env.ELEVENTY_ENV === 'development';

module.exports = function(eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {

        bs.addMiddleware("*", (req, res) => {
          if (!fs.existsSync(NOT_FOUND_PATH)) {
            throw new Error(`Expected a \`${NOT_FOUND_PATH}\` file but could not find one. Did you create a 404.html template?`);
          }

          const content_404 = fs.readFileSync(NOT_FOUND_PATH);
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
    });
    eleventyConfig.addPassthroughCopy('src')

    // Shortcodes
    eleventyConfig.addLiquidShortcode("project", function (name, url, img, desc, type, tech, date, solo, contributed) {

        let contributation = "";
        if (solo) {
            contributation = `<p>${contributed}</p>`;
        }

        return `
        <article>
            <img src="${img}">
            <div>
                <a href="${url}" target="_blank">${name}</a>
                <p>${desc}</p>
                <p>${tech}</p>
                <p>${type}</p>
                <p>${date}</p>
                ${contributation}
            </div>
        </article>
        `
    });

    eleventyConfig.addLiquidShortcode("quote", function (quote, person, media) {
        return `
        <figure>
            <blockquote>${quote}</blockquote>
            <figcaption>- ${person}, <cite>${media}.</cite></figcaption>
        </figure>
        `;
    });

    return {
    passthroughFileCopy: true
    }
}
