var assert = require("assert");
var parser = require('../index');
var checkJson = require('../lib/utils').checkJson;

var fs = require('fs');

describe('Wikipedia text is parsed successfully.', function(done) {
  it('should parse successfully', function(done) {
    fs.readFile(__dirname + '/data/data1.txt', function (err, data) {
      if (err) {
        console.error('Error: can not read file.', err);
      } else {
        var text = data.toString();
        parser(text, function(err, result) {
          if (err) {
            console.error('Error: failed to parse text.', err);
            done();
          } else {
            assert.equal(true, checkJson(result));
            done();
          }
        });
      }
    });
  });

  it('should parse successfully', function(done) {
    fs.readFile(__dirname + '/data/data2.txt', function (err, data) {
      if (err) {
        console.error('Error: can not read file.', err);
      } else {
        var text = data.toString();
        parser(text, function(err, result) {
          if (err) {
            console.error('Error: failed to parse text.', err);
            done();
          } else {
            assert.equal(true, checkJson(result));
            done();
          }
        });
      }
    });
  });
});
