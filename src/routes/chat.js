module.exports = function(app){
    app.get('/chat', function(req, res){
        app.src.controllers.index.chat(app, req, res)
    })
}