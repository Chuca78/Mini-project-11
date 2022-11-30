const path=require('path');

module.exports=function(app){

    app.get('/notes', function (res,req){
        res.sendFile(path.join(__dirname,'../public/notes.html'));
    });

    app.get('*', function (res,req){
    res.sendFile(path.join(__dirname,'../public/index.html'));
    });
}