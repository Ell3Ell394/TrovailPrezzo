var mongoose = require('mongoose');
Schema = mongoose.Schema;

var MusicianSchema = new Schema({
  title: String,
  link: String,
  prezzo: Number,
  console: String
});

mongoose.model('unieuroPS4', MusicianSchema);
mongoose.model('uniEuroXboxOne', MusicianSchema);

mongoose.model('mwPS4', MusicianSchema);
mongoose.model('mwXboxOne', MusicianSchema);

mongoose.model('tronyPS4', MusicianSchema);
mongoose.model('tronyXboxOne', MusicianSchema);




var GamesList = new Schema({
	title: String
});

mongoose.model('gamelist', GamesList);






