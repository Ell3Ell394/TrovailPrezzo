module.exports = function(app){
    var games = require('../controllers/games');
    
  	 
  	   	app.get('/games/uni/dataSites', games.DataFromSite);							//Prende i dati dai siti
        app.get('/games/uni/gameList', games.DataList);                   //Prende la lista dei giochi la mette nel db
        app.get('/games/uni/autocomplete/:title', games.findByTitle);     //endpoint per caricare lista autocomplete

   	   	app.get('/games/uni/user/:title', games.showFromDb);							//Prende il gioco da cercare nel mio db


    
  // 		app.get('/games/:title', games.findByTitle);								//Cerca in Database

   	

}