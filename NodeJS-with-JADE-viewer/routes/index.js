
/*
 * GET home page.
 */
var url = require("url");
var i18n = require("i18n");

exports.index = function(req, res){
  //Getting privious URL
  var refererHeader = req.header('Referer') != undefined ? req.header('Referer') : '/' ;
  var refererURL = url.parse(refererHeader, true);
  //console.log('Referer Header:'+refererHeader+", RefererURL Query:"+refererURL.query+", Path :"+refererURL.path);
  var innerHTML = "<a href='/'>Home</a>";
  res.render('index', { page: 'index', title: 'NodeJs with Jade viewer', name: 'NodeJS-JADE', referer: refererURL.path, html: innerHTML });
};
