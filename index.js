var parser = require('./lib/parser');

/**
 * Wiki Infobox parser main function
 * @method main
 * @param  {string}   content  wiki text to parse
 * @param  {function} callback callback function
 */
function main(content, callback) {
  parser(content, function(error, result) {
    if (error) {
      callback(error);
    } else {
      callback(null, result);
    }
  });
}

module.exports = main;
