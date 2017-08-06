var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var fetch = require('node-fetch');

var app = express();
app.use(express.static('public'))

fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response){
    return response.json();
  })
  .then(function(json){
    var str = JSON.stringify(json);
    //console.log(str);
    app.set('views', path.join(__dirname, 'views'));
    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    app.set('port', (process.env.PORT || 3000));

    var data = JSON.parse(str);
    app.get('/', function(req, res){
      res.render('home',{
        data: data,
      });
    });

    app.listen(app.get('port'), function(){
      console.log('listening at localhost:'+app.get('port'));
    });

}).catch(function(e){
  console.log('There was a problem with the request, check the REST api path and restart the server.');
});
