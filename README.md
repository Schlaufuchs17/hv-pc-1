# 🇪🇸 [Chat](#chat-)
# 🇬🇧 [Chatbot](#chatbot-)

# Chat 🇪🇸

Chatbot diseñado para facilitar la comunicación en tiempo real entre cliente y servidor. 

Se basa en **Node.js** como entorno de servidor y utiliza **Express** para gestionar las solicitudes HTTP y **Socket.IO** para la interacción bidireccional en tiempo real.

## Funcionalidades Principales:
- **Servidor Express**: Un servidor HTTP que maneja las peticiones del cliente y sirve contenido estático.
- **Comunicación en Tiempo Real**: Usa **Socket.IO** para establecer conexiones WebSocket, permitiendo que el cliente y el servidor intercambien mensajes en tiempo real.
- **Gestión de Variables de Entorno**: Utiliza **dotenv** para cargar variables de entorno desde un archivo `.env`.
- **Registro de Solicitudes**: Integración con **Morgan** para el registro de las solicitudes HTTP, lo que facilita la depuración y monitoreo del sistema.

## Tecnologías Utilizadas:
- **Node.js**: Entorno de ejecución del servidor.
- **Express**: Framework web ligero para la gestión de rutas y peticiones.
- **Socket.IO**: Biblioteca para la comunicación en tiempo real basada en WebSockets.
- **dotenv**: Gestión de variables de entorno.
- **Morgan**: Middleware para el registro de solicitudes HTTP.
- **libSQL client**: Cliente SQL para la interacción con bases de datos.

## Estructura del Proyecto:
- **`/client`**: Contiene los archivos del cliente (HTML, CSS, JavaScript).
- **`/server`**: Código fuente del servidor que maneja las conexiones y los eventos de WebSockets.

## Cómo Ejecutar el Proyecto:

1. Clonar este repositorio en una máquina local.
   
2. Instalar las dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor en modo de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrir un navegador y visitar http://localhost:3000 para interactuar con el cliente.

## Requisitos:

- Node.js y npm instalados.

##

# Chatbot 🇬🇧

This project is a chatbot system designed to facilitate real-time communication between client and server. 

It is based on **Node.js** as the server environment and uses **Express** to handle HTTP requests, along with **Socket.IO** for real-time, bidirectional interaction.

## Main Features:
- **Express Server**: An HTTP server that handles client requests and serves static content.
- **Real-Time Communication**: Uses **Socket.IO** to establish WebSocket connections, enabling the client and server to exchange messages in real-time.
- **Environment Variable Management**: Utilizes **dotenv** to load environment variables from a `.env` file.
- **Request Logging**: Integrated with **Morgan** for logging HTTP requests, facilitating debugging and monitoring.

## Technologies Used:
- **Node.js**: Server runtime environment.
- **Express**: Lightweight web framework for handling routes and requests.
- **Socket.IO**: Library for real-time communication based on WebSockets.
- **dotenv**: Environment variable management.
- **Morgan**: Middleware for logging HTTP requests.
- **libSQL client**: SQL client for database interaction.

## Project Structure:
- **`/client`**: Contains client files (HTML, CSS, JavaScript).
- **`/server`**: Source code for the server that handles connections and WebSocket events.

## How to Run the Project:

1. Clone this repository to a local machine.
   
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the server in development mode:
   ```bash
   npm run dev
   ```
4. Open a browser and visit http://localhost:3000 to interact with the client.

## Requirements:

- Node.js and npm installed.
