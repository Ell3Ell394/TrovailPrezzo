
var Xray = require('../x-ray');  
var x = Xray();

x('https://news.ycombinator.com/news', '.title')(function(err, title) {
  console.log(title) // Google
})

