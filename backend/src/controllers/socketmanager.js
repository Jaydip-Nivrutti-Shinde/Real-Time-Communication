import { ConnectionStates } from "mongoose";
import {  Server  } from "socket.io"

let connections = {};
let messages = {};
let timeOnline = {};
export const connectToSocket = (server)=>{
    const io = new Server(server,{
        cors:{
            origin:"*",
            methods:["GET","POST"],
            allowedHeaders:["my-custom-header"],
            credentials:true
        }
    });
    io.on("connection",(socket)=>{
        socket.on("accept-call",(path)=>{
            if(connections[path] == undefined){
                connections[path]=[];
            }
            Connections[path].push(socket.id);
            timeOnline[socket.id]=new Date();

            for(let a=0;a<connections[path].length;i++){
                io.to(connections[path][a]).emit("accept-call",socket.id,connections[path]);
            };

            if(messages[path]!=udefined){
                for(let a=0;a<messages[path].length;++a){
                    io.to(socket.id).emit("chat-message",messages[path][a]["data"],messages[path][a]["sender"],messages[path][a]["socket-id-sender"]);
                }
        }
    });

        socket.on("signal",(toId, meddage)=>{
            io.to(toId).emit("signal", socket.id, message);
        });

        socket.on("chat-message",(data, sender)=>{
            const [matchingRoom, found] = Object.entries(connections).reduce(([room, isFound],[roomKey, roomValue])=>{
                if(!isfound && roomValue.includes(socket.id)){
                    return [roomKey, true];
                }
                return [room, isFound];
            },['', false]); 
            if(found==true){ 
                if(messages[matchingRoom]==undefined){
                    messages[matchingRoom]=[];
                }
                messages[matchingRoom].push({"data":data, "sender":sender, "socket-id-sender":socket.id});
                console.log("Message ", key, ":",sender,data);
                connections[matchingRoom].forEach((elem)=>{
                    io.to(elem).emit("chat-message",data,sender,socket.id);
                });
            }
        });

        socket.on("disconnect",()=>{
            var diffTime = Math.abs(timeOnline[socket.id]-new Date());
            var key;

            for(const [k,v] of JSON.parse(JSON.stringify(Objects.entries(connections)))){
                for(let a=0;a<v.length;++a){
                    if(v[a]==socket.id){
                        key=k;
                       for(let a=0;a<connections[key].length;++a){
                            io.to(connections[key][a]).emit("user-left",socket.id);
                        }
                        var index = connections[key].indexOf(socket.id);
                        connections[key].splice(index,1);
                        if(connections[key].length==0){
                            delete connections[key];
                        }
                    }
                }
            }

            console.log("Time online: ",diffTime/1000," seconds");
        });

    });
    return io;    
};