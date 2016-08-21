
module.exports.getData = function(callback){
var Xray = require('x-ray');
var x = Xray();

var a = false;
var array = [];




vaiAvanti(a, 0, array);



function vaiAvanti(a, c, array) {
	if (!a) {
		var url = "https://www.trony.it/online/console%2c-giochi-tempo-libero/videogiochi/videogiochi/page"+ c + "_size12_cp-3142_cp-Trony-B2C-Trony?SortingAttribute=null&CategoryName=3142&CategoryDomainName=Trony-B2C-Trony&SearchParameter=%26%40QueryTerm%3D*%26ContextCategoryUUID%3DMyHAqAIUU78AAAE.oylD6udp%26OnlineFlag%3D1%26Piattaforma%3DXBOX%2BONE";
		//https://www.trony.it/online/web/WFS/Trony-B2C-Site/it_IT/-/EUR/ViewStandardCatalog-Browse?SearchParameter=%26%40QueryTerm%3D*%26ContextCategoryUUID%3DMyHAqAIUU78AAAE.oylD6udp%26OnlineFlag%3D1%26Piattaforma%3DPS4%26%40Sort.ProductSalePrice%3D0&PageSize=12&PageNumber="+c+"&CategoryName=3142&CategoryDomainName=Trony-B2C-Trony";
		//https://www.trony.it/online/console%2c-giochi-tempo-libero/videogiochi/videogiochi/page0_size12_cp-3142_cp-Trony-B2C-Trony?SortingAttribute=null&CategoryName=3142&CategoryDomainName=Trony-B2C-Trony&SearchParameter=%26%40QueryTerm%3D*%26ContextCategoryUUID%3DMyHAqAIUU78AAAE.oylD6udp%26OnlineFlag%3D1%26Piattaforma%3DPS4

		x(url, '.listing_risultati_prodotti .smcc-listing-risultati-prodotto', [{
			title: '.first-col  a',
			link: '.product-description a@href',
			prezzo: '.second-col .ish-priceContainer-salePrice'
		}])(function(err, obj) {

			if (Object.keys(obj).length === 0) {
				a = true;

				console.log("tronyXboxOne")   
				callback(null, array);
			}
			
			for (var i = obj.length - 1; i >= 0; i--) {
			  obj[i].prezzo = obj[i].prezzo.replace(/[\s]/g, ''); //rimuove tabulazione e a capo
			  obj[i].console = "PS4"
			};
			//halfObj = obj.splice(obj.length/2);
			array = array.concat(obj);
			c = c + 1;
			vaiAvanti(a, c, array);
		})
	}
	}	
}
