var mongoose = require('mongoose');
Schema = mongoose.Schema;

var GameSchema = new Schema({
  title: String,
  link: String,
  prezzo: Number,
  console: String
});

mongoose.model('unieuroPS4', GameSchema);
mongoose.model('uniEuroXboxOne', GameSchema);

mongoose.model('mwPS4', GameSchema);
mongoose.model('mwXboxOne', GameSchema);

mongoose.model('tronyPS4', GameSchema);
mongoose.model('tronyXboxOne', GameSchema);




var GamesList = new Schema({
	title: String
});

mongoose.model('gamelist', GamesList);






