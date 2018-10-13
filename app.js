// Importa as configurações do servidor
var app = require('./config/server');

//Parametriza a porta de escuta
var server = app.listen(3000, function(){
    console.log('Server Chat ON!!');
});

io = require('socket.io').listen(server);

//criando a conecão para o websocket
io.on('connection', function(socket){
    console.log('Usuário conectado');

    socket.on('disconnect', function(){
        console.log('Usuário desconectado');
    });
});