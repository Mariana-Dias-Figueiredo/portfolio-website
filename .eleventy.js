module.exports = function(eleventyConfig) {
  // Tell Eleventy to pass these files directly to your final website
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("documents"); 
  
  return {};
};