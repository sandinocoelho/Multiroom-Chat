// Importa as configurações do servidor
var app = require('./config/server');

//Parametriza a porta de escuta
var server = app.listen(3000, function(){
    console.log('Server Chat ON!!');
});

io = require('socket.io').listen(server);

//Definição de variavel global IO
app.set('io', io); 

//criando a conecão para o websocket
// on('nome', function(data){}); - Escuta pedidos de execução
// emit('nome', {}) - Pedido para executar alguma ação
io.on('connection', function(socket){
    console.log('Usuário conectado');

    socket.on('disconnect', function(){
        console.log('Usuário desconectado');
    });

    socket.on('msgToServer', function(data){
        // socket.emit('msgToClient', {apelido: data.apelido, mensagem: data.mensagem});
        // socket.broadcast.emit('msgToClient', {apelido: data.apelido, mensagem: data.mensagem});
        app.get('io').emit("msgToClient", {apelido: data.apelido, mensagem: data.mensagem});
        if(parseInt(data.control) == 0){
            app.get('io').emit("addPart", {apelido: data.apelido});
        }

        console.log(data);
    });
});