module.exports.getData = function(callback){

var Xray = require('x-ray');
var x = Xray();
var async = require('async');

var a = false;
var array = [];

/*
 var url = "https://www.mediaworld.it/mw/giochi-libri-musica-e-film/sony-ps4/giochi?pageNumber=1&pageSize=12&orderBy=";
 */

// Funziona 14/04/2016
vaiAvanti(a, 1, array);

 
function vaiAvanti(a, c, array) {
  if (!a) {
    x('https://www.mediaworld.it/mw/CategoryNavigationResultsView?searchType=&maxPrice=&langId=-4&sType=SimpleSearch&metaData=&pageSize=12&manufacturer=&resultCatEntryType=&catalogId=20000&minPrice=&categoryId=241435&storeId=20000&filterFacet=&productBeginIndex=' + c + '&beginIndex=' + c, '.product', [{
      title: '.product_name a',
      link: '.product_name a@href',
      prezzo: '.product_info.right .offerprice'

    }])(function(err, obj) {

      if (Object.keys(obj).length === 0) {
        a = true;
      
      console.log("mediaworld PS4");
      callback(null, array);
      }
      /* else {
                                   b = b.push(obj);
                                   //b = obj;
                               } */
      //console.warn(obj);
      for (var i = obj.length - 1; i >= 0; i--) {
        obj[i].title = obj[i].title.replace(/[\r\t\n]/g, '');
        obj[i].prezzo = obj[i].prezzo.replace(/[\r\t\n\s]/g, ''); //rimuove tabulazione e a capo
        obj[i].prezzo = obj[i].prezzo.replace(/(\d)(?=(\d\d)+(?!\d))/g, "$1,")  //mette la virgola ogni due cifre
        obj[i].prezzo = obj[i].prezzo + "€";
        obj[i].console = "PS4"
      };
      
      //console.log(obj);


      array = array.concat(obj);
      c = c + 12;
      vaiAvanti(a, c, array);

    })
  }

  }
}



//  https://www.mediaworld.it/mw/CategoryNavigationResultsView?searchType=&maxPrice=&langId=-4&sType=SimpleSearch&metaData=&pageSize=12&manufacturer=&resultCatEntryType=&catalogId=20000&minPrice=&categoryId=241435&storeId=20000&filterFacet=
