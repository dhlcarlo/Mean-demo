
module.exports = function(mongoose) {
var BlogSchema = new mongoose.Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
    });
    
var MovieSchema = new mongoose.Schema({
  Title:  String,
  Year: Date,
  Body:   String,
  imdbID: String,
  Type: String,
  Poster: String
  
    });
     
    
    var models = {
      Blogs : mongoose.model('Blogs', BlogSchema),
      Movies : mongoose.model('Movies', MovieSchema)
    };
    return models;
}