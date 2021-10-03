var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Maruthi158:Jethin%401227@cluster0.amapl.mongodb.net/GDP1?retryWrites=true&w=majority", {useNewUrlParser: true});
var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;