module.exports.getData = function(title, callback){
var Xray = require('x-ray');  
var x = Xray();




var url = "https://www.mediaworld.it/mw/SearchDisplay?searchTerm="+title;
//var scraped ='';
x(url, '.product_name',
  [{
    title: 'a',
    //link: 'a@href' 
  }]
)(function(err, obj) {
	for (var i = obj.length - 1; i >= 0; i--) {
		obj[i].title = obj[i].title.replace(/[\t\n]/g,'');    //rimuove tabulazione e a capo
		 //console.log(obj[i]);
    };
     callback(null, obj);
      //console.log(arr[i])
      //console.log(obj.count)
})

}
