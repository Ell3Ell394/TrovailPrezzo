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
    x('https://www.mediaworld.it/mw/CategoryNavigationResultsView?searchType=&maxPrice=&langId=-4&sType=SimpleSearch&metaData=&pageSize=12&manufacturer=&resultCatEntryType=&catalogId=20000&minPrice=&categoryId=241447&storeId=20000&filterFacet=&productBeginIndex=' + c + '&beginIndex=' + c, '.product', [{
      title: '.product_name a',
      link: '.product_name a@href',
      prezzo: '.product_info.right .offerprice'

    }])(function(err, obj) {

      if (Object.keys(obj).length === 0) {
        a = true;
      
      console.log("mwXboxOne");
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

        obj[i].console = "XboxOne"
      };
      
      //console.log(obj);


      array = array.concat(obj);
      c = c + 12;
      vaiAvanti(a, c, array);

    })
  }
//console.log(array);

  }
}
//  https://www.mediaworld.it/mw/CategoryNavigationResultsView?searchType=&maxPrice=&langId=-4&sType=SimpleSearch&metaData=&pageSize=12&manufacturer=&resultCatEntryType=&catalogId=20000&minPrice=&categoryId=241435&storeId=20000&filterFacet=


//https://www.mediaworld.it/mw/CategoryNavigationResultsView?searchType=&maxPrice=&langId=-4&sType=SimpleSearch&metaData=&pageSize=12&manufacturer=&resultCatEntryType=&catalogId=20000&minPrice=&categoryId=241447&storeId=20000&filterFacet=&productBeginIndex=1&beginIndex=1
//curl 'https://www.mediaworld.it/mw/CategoryNavigationResultsView?searchType=&maxPrice=&langId=-4&sType=SimpleSearch&metaData=&pageSize=12&manufacturer=&resultCatEntryType=&catalogId=20000&minPrice=&categoryId=241435&storeId=20000&filterFacet=' -H 'Pragma: no-cache' -H 'Origin: https://www.mediaworld.it' -H 'Accept-Encoding: gzip, deflate' -H 'Accept-Language: en-US,en;q=0.8,it;q=0.6' -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Accept: */*' -H 'Cache-Control: no-cache' -H 'X-Requested-With: XMLHttpRequest' -H 'Cookie: ckmw_policy=1; MW_JSESSIONID=0000yToImWwFD1g8TOAmhjyOkm6:19g6gdajk; MW_SESSION_ESTABLISHED=true; MW_PERSISTENT=hw49G3Qs4ZUu4NPqun4vgs1DNys%3D%0A%3B2016-02-28+17%3A58%3A37.697_1456678714243-402127_20000; MW_AUTHENTICATION_-1002=-1002%2Czwu1ehdfD8wAi%2FKiduPR59pPELs%3D; MW_ACTIVEPOINTER=-4%2C20000; MW_USERACTIVITY_-1002=-1002%2C20000%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2Cnull%2C%2BTX7zx2WHcPllKQdeefndObkmHnywQpiBxYQWTBa366tcmnrDjQ9%2BNrsbsiw385%2FjRyvAWs8jYcin2ZEg4m2Ab7P5eaT8O%2Fd63RTXstSGpXcsKQPCsyU0H%2BkOXZqMw39qt8GyXO7etWbDQql4ukES0P7eNjfwSbYEt%2BNJByTOX3aZDKbLw1MXDNgE9pgmkBhJ5LQDaKbdv97DQbzBHMXPQ%3D%3D; MW_GENERIC_ACTIVITYDATA=[1212030720%3Atrue%3Afalse%3A0%3ASBbcCuBOepADeMW9sCRstiBZiZQ%3D][com.ibm.commerce.store.facade.server.context.StoreGeoCodeContext|null%26null%26null%26null%26null%26null][CTXSETNAME|Store][com.ibm.commerce.context.globalization.GlobalizationContext|-4%26EUR%26-4%26EUR][com.ibm.commerce.context.base.BaseContext|20000%26-1002%26-1002%26-1][com.ibm.commerce.context.experiment.ExperimentContext|null][com.ibm.commerce.context.entitlement.EntitlementContext|10502%2610502%26null%26-2000%26null%26null%26null][com.ibm.commerce.giftcenter.context.GiftCenterContext|null%26null%26null][com.ibm.commerce.foundation.dataload.businesscontext.DataLoadContext|null][com.ibm.commerce.context.audit.AuditContext|1456678714243-402127][com.ibm.commerce.catalog.businesscontext.CatalogContext|20000%26null%26false%26false%26false][com.mediamarket.commerce.enterprise.login.sso.context.SSOContext|null%26null%26null][com.mediamarket.commerce.remoteshop.RemoteShopContext|null]; dtCookie=99EDEE3304F49CD22EE11132C187BFEF|TWVkaWF3b3JsZHwx; CompareItems_20000=; dtLatC=79p274.5p40p63p81p67p37.5p49.5p75.5p55p51; dtPC=479221278_954h4' -H 'Connection: keep-alive' -H 'Referer: https://www.mediaworld.it/mw/giochi-libri-musica-e-film/sony-ps4/giochi?pageNumber=5&pageSize=12' --data 'contentBeginIndex=0&productBeginIndex=48&beginIndex=48&orderBy=3&isHistory=false&pageView=list&resultType=products&orderByContent=&searchTerm=&facet=&minPrice=&maxPrice=&storeId=20000&catalogId=20000&langId=-4&objectId=&requesttype=ajax' --compressed