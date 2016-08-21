module.exports.getData = function(callback){

var Xray = require('x-ray');
var x = Xray();

//var arr1 = "1 a b c d e f g h i j k l m n o p q r s t u v w x y z";
//var arr = arr1.split(' ');

var i = 0;
//var arrLenght = arr.arrLenght;
var arr = "1abcdefghijklmnopqrstuvwxyz".split("");

var array = [];


vaiAvanti(i, arr,array);



function vaiAvanti(i,arr,array) {

//for (var i = 0; i < arr.length; i++) {
    //console.log('http://www.gamerevolution.com/game/all/'+ arr[i] +'/long_name/asc')

    x('http://www.gamerevolution.com/game/all/' + arr[i] + '/long_name/asc', 'td .tdIndexList', [{
            title: 'a',
           
            //image: '.dribbble-img [data-src]@data-src',
        }])(function(err, obj) {

        	if (i > arr.length) {
                callback(null, array);
                //console.log(array)
        	}else{ 
            
            array = array.concat(obj);
                //console.log(arr[i])
                //console.log(obj.count)
                i = i + 1;

                vaiAvanti(i,arr,array);
            }
        })
        //.write('results-' + arr[i] + '.json')

	};
	
}