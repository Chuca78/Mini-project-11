const path=require('path');

module.exports=function(app){

    app.get('/notes', function (req, res){
        console.log('Notes html route is working')
        res.sendFile(path.join(__dirname,'../public/notes.html'));
    });

    app.get('*', function (res,req){
    console.log ('* htmlroute is working')
    res.sendFile(path.join(__dirname,'../public/index.html'));
    });
}