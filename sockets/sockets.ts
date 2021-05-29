import { Socket } from 'socket.io';
import socketIO from 'socket.io';




export const desconectar = (cliente:Socket)=>{
    cliente.on('disconnect',()=>{
        console.log('Cliente Desconectado');
    });
}

//Escuchar mensaje
export const mensaje = (cliente:Socket, io: socketIO.Server )=>{
    cliente.on('mensaje',(payload:{de:string, cuerpo:string})=>{
        console.log('Mensaje recibido', payload);
        io.emit('mensaje-nuevo',payload);
    })
}