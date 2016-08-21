module.exports.getData = function(callback){
var Xray = require('x-ray');  
var x = Xray();

//Funziona 22/07/2016
//Formattato prezzo
var url = "http://www.unieuro.it/online/Console/Xbox-One/Giochi-Xbox-One?q=:relevance&page=0";
//var scraped = ''; #main-col-1 > div.listing-products.listing-rows.clearfix > div:nth-child(2) > div.first-block.clearfix > div.entry > h2

x(url, '.listing-products.listing-rows.clearfix .single-item', [{

    title: '.entry .title a',
    link: '.entry .title a@href',
    prezzo: '.total'  // .listing-rows .single-item .total
  }])(function(err, obj) {

     for (var i = obj.length - 1; i >= 0; i--) {
       obj[i].prezzo = obj[i].prezzo.replace(/^\W\s/, ''); 
       obj[i].prezzo = obj[i].prezzo + "€"
       obj[i].console = "XboxOne";

     };
      //console.log(obj);
      callback(null, obj);

 
    })
.paginate('div.paginator .next a@href')
//.write('resultsUnieuroXboxOne.json') 
}