module.exports = function(eleventyConfig) {
  // Tell Eleventy to pass these files directly to your final website
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("main.js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("documents");

  // Full-size originals of the photos are kept locally but never published
  eleventyConfig.ignores.add("_originals/**");

  // Uses PORT when it is set (e.g. by a preview tool), otherwise the usual 8080
  eleventyConfig.setServerOptions({ port: Number(process.env.PORT) || 8080 });

  // Picks the right language from a { en: "...", pt: "..." } pair.
  // Anything that is not a pair (numbers, image paths...) is returned as it is.
  eleventyConfig.addFilter("t", function(value, lang) {
    if (value && typeof value === "object" && !Array.isArray(value) && "en" in value) {
      return value[lang] ?? value.en;
    }
    return value;
  });

  // Turns a page address into the same page in another language: /about/ <-> /pt/about/
  eleventyConfig.addFilter("localeUrl", function(url, lang) {
    const base = url.replace(/^\/pt(\/|$)/, "/");
    return lang === "pt" ? "/pt" + base : base;
  });

  // Small version of a photo (made for the About timeline): /images/x.webp -> /images/thumbs/x.webp
  eleventyConfig.addFilter("thumb", function(src) {
    return src.replace(/^\/images\//, "/images/thumbs/");
  });

  return {
    dir: {
      includes: "_includes",
      data: "_data"
    }
  };
};
