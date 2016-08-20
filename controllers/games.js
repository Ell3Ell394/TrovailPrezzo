var mongoose = require('mongoose');
var async = require('async');
//unieuroPS4 = mongoose.model('unieuroPS4');

uniEuroXboxOne = mongoose.model('uniEuroXboxOne');
uniEuroXboxOne.collection.createIndex({"title": "text"})


unieuroPS4 = mongoose.model('unieuroPS4');
unieuroPS4.collection.createIndex({"title": "text"})


mwPS4 = mongoose.model('mwPS4');
mwPS4.collection.createIndex({"title": "text"})

mwXboxOne = mongoose.model('mwXboxOne');
mwXboxOne.collection.createIndex({"title": "text"})

tronyPS4 = mongoose.model('tronyPS4');
tronyPS4.collection.createIndex({"title": "text"})

tronyXboxOne = mongoose.model('tronyXboxOne');
tronyXboxOne.collection.createIndex({"title": "text"})

// lista videogiochi per autocomplete
gamelists = mongoose.model('gamelist');



//var unieuro = require('../models/UniEuroPS4')

var unieuroPS4Model = require('../models/UniEuroPS4')
var uniXboxModel = require('../models/UniEuroXboxOne')

var mwPS4Model = require('../models/MediaworldPS4')
var mwXboxOneModel = require('../models/MediaworldXboxOne')

var tronyPS4Model = require('../models/TronyPS4')
var tronyXboxOneModel = require('../models/TronyXboxOne')


var gameListModel = require('../models/gamelistscraping')



//gratta la lista dei giochi dal sito
exports.DataList= function(req, res){
  gameListModel.getData(req.params.title, function(err, scrapeData) {
       if (err) {
            // do something with error
            console.log("error");
          } else {
                       
        gamelists.collection.remove( { } )
        gamelists.collection.insert(scrapeData) 
         
         }
      res.send(202);
       });


}

/// funziona 18/07/1016
//gratta i dati  dei giochi dai siti
exports.DataFromSite= function(req, res){
   unieuroPS4Model.getData(req.params.title, function(err, scrapeData) {
        if (err) {
             // do something with error
             console.log("error");
           } else {
                        
              console.log("Unieurops4")
             //funziona
            unieuroPS4.collection.remove( { } )
            unieuroPS4.collection.insert(scrapeData) 
         
            //res.send("ok")
          }
        });

   uniXboxModel.getData(req.params.title, function(err, scrapeData) {
        if (err) {
             // do something with error
             console.log("error");
           } else {
                        
            //console.log(scrapeData);
          console.log("Unieuroxboxone")

           // items.insertMany(scrapeData);
            uniEuroXboxOne.collection.remove( { } )
            uniEuroXboxOne.collection.insert(scrapeData) 
          
            //res.send("ok")
          }
        });


  mwPS4Model.getData(req.params.title, function(err, scrapeData) {
       if (err) {
            // do something with error
            console.log("error");
          } else {
                       
             //console.log("ps4GetData")
           mwPS4.collection.remove( { } )
           mwPS4.collection.insert(scrapeData) 
        
           //res.send("ok")
         }
       });




    mwXboxOneModel.getData(req.params.title, function(err, scrapeData) {
       if (err) {
            // do something with error
            console.log("error");
          } else {
                       
             //console.log("ps4GetData")
            mwXboxOne.collection.remove( { } )
            mwXboxOne.collection.insert(scrapeData) 
        
           //res.send("ok")
         }
       });

//*********************************** tronyps4

    tronyPS4Model.getData(req.params.title, function(err, scrapeData) {
       if (err) {
            // do something with error
            console.log("error");
          } else {
                       
            //console.log(scrapeData)
            tronyPS4.collection.remove( { } )
            tronyPS4.collection.insert(scrapeData) 
        
           //res.send("ok")
         }
       });


    tronyXboxOneModel.getData(req.params.title, function(err, scrapeData) {
       if (err) {
            // do something with error
            console.log("error");
          } else {
                       
            //console.log(scrapeData)
            tronyXboxOne.collection.remove( { } )
            tronyXboxOne.collection.insert(scrapeData) 
        
           //res.send("ok")
         }
       });

    res.send("ok")

}



//Trova i titoli per l'autocomplete
//Funziona
// i = risultato non case sensitive
exports.findByTitle = function(req, res){ 
var regex = new RegExp(req.params.title, "i")
gamelists.collection.find({'title': regex }, {_id:0}, function(err, cursor){
    cursor
        .map(function(item){ 
            return item.title; 
        })
        .toArray(function(err, results){
            return res.send(results)
        })
}) 

};


//Trova i giochi dal db
//Funziona
exports.showFromDb = function(req, res){
  async.parallel([
    function(callback) {

      unieuroPS4.collection.find({
          $text: {
              $search: req.params.title
          }
      }, {
          _id: 0,

          score: {
              $meta: "textScore"
          }
      }).sort({
          score: {
              $meta: "textScore"
          }
      }).limit(1).toArray(function(err, results) {
          //console.log(results);

          callback(err, results)
      })

   },
    function(callback) {

      uniEuroXboxOne.collection.find({
          $text: {
              $search: req.params.title
          }
      }, {
          _id: 0,

          score: {
              $meta: "textScore"
          }
      }).sort({
          score: {
              $meta: "textScore"
          }
      }).limit(1).toArray(function(err, results) {
          //console.log(results);

          callback(err, results)
      })

   },
    function(callback) {

      mwPS4.collection.find({
          $text: {
              $search: req.params.title
          }
      }, {
          _id: 0,

          score: {
              $meta: "textScore"
          }
      }).sort({
          score: {
              $meta: "textScore"
          }
      }).limit(1).toArray(function(err, results) {
          //console.log(results);

          callback(err, results)
      })

   },
    function(callback) {

      mwXboxOne.collection.find({
          $text: {
              $search: req.params.title
          }
      }, {
          _id: 0,

          score: {
              $meta: "textScore"
          }
      }).sort({
          score: {
              $meta: "textScore"
          }
      }).limit(1).toArray(function(err, results) {
          //console.log(results);

          callback(err, results)
      })

   },
    function(callback) {

      tronyXboxOne.collection.find({
          $text: {
              $search: req.params.title
          }
      }, {
          _id: 0,

          score: {
              $meta: "textScore"
          }
      }).sort({
          score: {
              $meta: "textScore"
          }
      }).limit(1).toArray(function(err, results) {
         // console.log(results);

          callback(err, results)
      })

   },
    function(callback) {

      tronyPS4.collection.find({
          $text: {
              $search: req.params.title
          }
      }, {
          _id: 0,

          score: {
              $meta: "textScore"
          }
      }).sort({
          score: {
              $meta: "textScore"
          }
      }).limit(1).toArray(function(err, results) {
         // console.log(results);

          callback(err, results)
      })

   },
  ],      
function(err, results){

//devo rimuovere i risultati []
results = results.filter(n =>{ return n.length > 0 }); //arrow function

//console.log(results);
  results= results.map(game => {
    //console.log(game)
    delete game[0].score;
    return game[0];
  })

  console.log(results);
  res.send(results);
});

}





/*
///funziona Unieuro XBOX
exports.ProvaUnieuro = function(req, res){
   uniXboxModel.getData(req.params.title, function(err, scrapeData) {
        if (err) {
             // do something with error
             console.log("error");
           } else {
                        
            console.log("ci siamo quasi");

           // items.insertMany(scrapeData);
            //funziona
            uniEuroXboxOne.collection.insert(scrapeData) 
          
          res.send(scrapeData)
          }
        });
}

*/






/*
exports.ScrapingShops = function(req, res){
  async.parallel([
    function(callback){
      unieuro.getData(req.params.title, function(err, scrapeData) {
        if (err) {
             // do something with error
             console.log("error");
           } else {
            callback(null, scrapeData);


            db.items.insert({title: "Prova"});

          }
        });
    },

  ],
// optional callback
function(err, results){

  res.send(results)
  console.log("sono arrivato qui");
  //console.log(results);
  });

}
*/




//attualmente non usata
// settando a zero l'id gli dico di non mostrarmelo una volta fatta la query
/*exports.FindAll = function(req, res){
  gamelist.collection.find({}, {_id:0}, function(err, cursor){
    cursor
        .map(function(item){ 
            return item.title; 
        })
        .toArray(function(err, results){
            console.log(results);
            return res.send(results)
        })
})
};
*/



/*


  exports.searchTitle = function(req, res) {
    unieuro.getData(req.params.title, function(err, scrapeData) {
      if (err) {
             // do something with error
      } else {
          res.send(scrapeData);
          }
      });
  };


exports.searchSecondShop = function(req, res) {
  trony.getData(req.params.title, function(err, scrapeData) {
    if (err) {
           // do something with error
    } else {
        res.send(scrapeData);
        }
    });
};

exports.searchThirdShop = function(req, res) {
 mw.getData(req.params.title, function(err, scrapeData) {
  if (err) {
           // do something with error
         } else {
          res.send(scrapeData);
        }
      });
};

exports.searchInShops = function(req, res){
  async.parallel([
    function(callback){
      unieuro.getData(req.params.title, function(err, scrapeData) {
        if (err) {
             // do something with error
           } else {
            callback(null, scrapeData);
          }
        });
    },

    function(callback){
      trony.getData(req.params.title, function(err, scrapeData) {
        if (err) {
             // do something with error
           } else {
            callback(null, scrapeData);
          }
        });
    },

    function(callback){
      mw.getData(req.params.title, function(err, scrapeData) {
        if (err) {
             // do something with error
           } else {
            callback(null, scrapeData);
          }
        });
    },
  ],
// optional callback
function(err, results){

  res.send(results)
  console.log("sono arrivato qui");
  //console.log(results);
  });

}

*/
