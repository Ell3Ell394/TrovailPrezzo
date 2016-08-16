module.exports.getData = function(title, callback){

var Xray = require('x-ray');  
var x = Xray();


//https://www.trony.it/online/web/WFS/Trony-B2C-Site/it_IT/-/EUR/ViewParametricSearch-SimpleOfferSearch?q=fifa+16
//https://www.mediaworld.it/mw/SearchDisplay?searchTerm=fifa+16
var url = "https://www.trony.it/online/web/WFS/Trony-B2C-Site/it_IT/-/EUR/ViewParametricSearch-SimpleOfferSearch?q="+title;

x(url, '.product-description',
  [{
    title: 'a',
    //link: 'a@href' 
  }]
)(function (err, obj) {

       
        callback(null, obj);
    });

}
