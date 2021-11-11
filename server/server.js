let app = require('express')(),
server = require('http').Server(app),
bodyParser = require('body-parser')
express = require('express'),
cors = require('cors'),
http = require('http'),
path = require('path');

port = 4006;

let articleRoute = require('./Routes/article'),
util = require('./Utilities/util');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
 
app.use(cors());
 
app.use(function(err, req, res, next) {
return res.send({ "statusCode": util.statusCode.ONE, "statusMessage": util.statusMessage.SOMETHING_WENT_WRONG });
});

app.use('/article', articleRoute);
 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
next();
});
 
/*first API to check if server is running*/
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, '../server/client/dist/index.html'));
})
 
 
server.listen(port,function(){
console.log('app listening on port:'+{port});
});