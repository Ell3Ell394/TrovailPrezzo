var mongoose = require('mongoose');
var async = require('async');

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




var unieuroPS4Model = require('../models/UniEuroPS4')
var uniXboxModel = require('../models/UniEuroXboxOne')

var mwPS4Model = require('../models/MediaworldPS4')
var mwXboxOneModel = require('../models/MediaworldXboxOne')

var tronyPS4Model = require('../models/TronyPS4')
var tronyXboxOneModel = require('../models/TronyXboxOne')


var gameListModel = require('../models/gamelistscraping')




var CronJob = require('cron').CronJob;

new CronJob('00 05 20 * * *', function() {
  gameListModel.getData(function(err, scrapeData) {
         if (err) {
              // do something with error
              console.log("error");
            } else {
                         
          gamelists.collection.remove( { } )
          gamelists.collection.insert(scrapeData) 
          console.log("lista")
           }
         });
}, null, true, 'Europe/Rome');


/// funziona 18/07/1016
//gratta i dati  dei giochi dai siti
new CronJob('00 05 20 * * *', function() {
   unieuroPS4Model.getData(function(err, scrapeData) {
        if (err) {
             // do something with errors
             console.log("error");
           } else {
                        
              console.log("Unieurops4")
             //funziona
            unieuroPS4.collection.remove( { } )
            unieuroPS4.collection.insert(scrapeData) 
         
           
          }
        });

   uniXboxModel.getData(function(err, scrapeData) {
        if (err) {
             // do something with error
             console.log("error");
           } else {
                        
              console.log("Unieuroxboxone")

            uniEuroXboxOne.collection.remove( { } )
            uniEuroXboxOne.collection.insert(scrapeData) 
          
           
          }
        });


  mwPS4Model.getData(function(err, scrapeData) {
       if (err) {
            // do something with error
            console.log("error");
          } else {
                       
           mwPS4.collection.remove( { } )
           mwPS4.collection.insert(scrapeData) 
        
          
         }
       });




    mwXboxOneModel.getData(function(err, scrapeData) {
       if (err) {
            // do something with error
            console.log("error");
          } else {
                       
            mwXboxOne.collection.remove( { } )
            mwXboxOne.collection.insert(scrapeData) 
        
          
         }
       });


    tronyPS4Model.getData(function(err, scrapeData) {
       if (err) {
            // do something with error
            console.log("error");
          } else {
                       
            tronyPS4.collection.remove( { } )
            tronyPS4.collection.insert(scrapeData) 
        
          
         }
       });


    tronyXboxOneModel.getData(function(err, scrapeData) {
       if (err) {
            // do something with error
            console.log("error");
          } else {
                       
            tronyXboxOne.collection.remove( { } )
            tronyXboxOne.collection.insert(scrapeData) 
          
         }
       });
}, null, true, 'Europe/Rome');



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