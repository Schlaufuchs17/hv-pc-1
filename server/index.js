/*00*//*
        - Instalar => npm install -y
        - Iniciar y crear json => npm init -y
        - Instalar dependencias (express) => npm install express -E
        - Crear carpeta server y dentro index.js
*/

/*01*/ import express from 'express' //importamos la dependencia express que hemos instalado. Para que funcionen los imports
/*09*/ import logger from 'morgan'  //Importamos el logger de Morgan
/*02*/ //En package.json hay que poner que el tipo de imprtaciones serán module:  "type": "module",
/*13*/ import {Server} from 'socket.io' // Importamos socket.io despues de instalarlo
/*14*/ import {createServer} from 'node:http' // Crear servidores http
/*03*/ const port = process.env.PORT ?? 3000 //Crear una constante para el puerto, por defecto el puerto 3000

/*04*/ const app = express () // Inicializamos la aplicacion llamando a express
/*15*/ const server = createServer(app) // Creamos un servidor http
/*16*/ const io =  new Server (server) // Crear servidor socket io y le pasamos el servidor http -(server)-

/*17*/ // Cuando el socket io tenga una conexion se ejecuta este callback
io.on('connection', (socket) =>{
    console.log('El uasuario se ha conectado')

    /*20*/ // Ver cuando un usuario se desconecta
    socket.on('disconnect', ()=>{ 
        console.log ('El usuario se ha desconectado')
    })

    /*22*/ // Socket para cuando reciba un evento de "mensaje de chat", haga algo en respuesta
    socket.on ('chat message', (msg) =>{ // Para ver que le llega el mensaje
        io.emit('chat message', msg) // Emitimos un mensaje para todo el mundo (Broadcast)
    })
}) 

/*10*/ app.use(logger('dev')) // Morgan funciona a nivel de request para express
/*11 Crear archivo index.html en la carpeta "client" */

/*05*/ app.get ('/', (req, res) => { // Mensaje de bienvenida cuando el usuario acceda al chat
    res.sendFile(process.cwd() + '/client/index.html') /* Servimos como mensaje un archivo concreto, -cwd- es la carpeta donde se ha inicilalizado el proceso*/
})

/*06*/ /*inicializar el servidor, que estará escuchando. 
        Ésto se hace para tenerlo todo en un solo servidor*/
    server.listen(port,() => { 
    console.log(`El servidor esta conectado al puerto ${port}`)
})
/*07*/ /* En package.json copiamos - "dev": "node --watch ./server/index.js", - 
        en la parte de scripts para hacerlo automaticamente con "npm run dev" 
        y acceder "http://localhost:3000"*/

/*08*/ /* Para saber el estado del servidor, si tarda mucho o da respuestas 
        incorrectas, mejoramos el login instalando otra dependencia - npm install morgan -E - (con
        la E para que ponga las dependencias exactas).
        Morgan es un logger, una herramienta que guarda una traza de algo*/

/*12*/ /*Crear el websocket -> socket.io: "npm install socket.io -E*/ 