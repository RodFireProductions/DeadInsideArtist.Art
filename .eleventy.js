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
    eleventyConfig.addLiquidShortcode("svgPath", function (which) {
        return `
        <svg height="0" width="0">
          <clipPath id="heartPath" clipPathUnits="objectBoundingBox">
            <path d="M0.5,1
              C 0.5,1,0,0.7,0,0.3
              A 0.25,0.25,1,1,1,0.5,0.3
              A 0.25,0.25,1,1,1,1,0.3
              C 1,0.7,0.5,1,0.5,1 Z" />
          </clipPath>
        </svg>
        `
    });

    eleventyConfig.addLiquidShortcode("project", function (name, url, img, desc, type, tech, date, team, contributed) {

        let contributation = "";
        if (team) {
            contributation = `<p>${contributed}</p>`;
        }

        return `
        <article>
            <img src="${img}">
            <div>
                <a href="${url}" target="_blank">${name}</a>
                <p>${desc}</p>
                <div class="side">
                    <p>${type}</p>
                    <p>${date}</p>
                </div>
                <div class="side">
                    <p>${tech}</p>
                    ${contributation}
                </div>
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
