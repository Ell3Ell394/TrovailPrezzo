module.exports.getData = function(title, callback){
var Xray = require('x-ray');  
var x = Xray();


var url = "http://www.unieuro.it/online/search?text="+title;
//var scraped = '';

x(url, '.listing-products.listing-rows.clearfix h2.title',
  [{
    title: 'a',
    link: 'a@href' 
  }]
)(function (err, obj) {
        if (err) return callback(err);

       // for (var i = obj.length - 1; i >= 0; i--) {
        //    scraped += obj[i]['title'] + " "; //we get just the title of the links for now
        //};
        callback(null, obj);
    });

 
}


