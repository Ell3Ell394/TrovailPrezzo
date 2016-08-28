module.exports = function(app){
    var games = require('../controllers/games');
    
  	 
  	   	//app.get('/games/uni/dataSites', games.DataFromSite);						//Prende i dati dei giochi dai vari siti e li stora
        //app.get('/games/uni/gameList', games.DataList);                   			//Prende i dati dei giochi usciti fino ad ora

        app.get('/games/uni/autocomplete/:title', games.findByTitle);     	//Endpoint per caricare autocomplete

   	   	app.get('/games/uni/user/:title', games.showFromDb);				//Cerca nel db il gioco desiderato
}