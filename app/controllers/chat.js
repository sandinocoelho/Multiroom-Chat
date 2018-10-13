module.exports.beginChat = function(application, req, res){
    var dadosForm = req.body;

    //Validação utitizando o método assert do express-validator
    req.assert("apelido", "Apelido é obrigatório").notEmpty(); 
    req.assert("apelido", "Apelido deve ter entre 3 e 15 caracteres").len(3,15);

    // Função validationErrors retorna um objeto com os erros de validação
    var erros = req.validationErrors();

    if(erros){
        res.render('index', {validacao : erros});
        return;
    }
    
    res.render('chat');
    

};