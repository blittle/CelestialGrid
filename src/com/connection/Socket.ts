///<reference path="../../../typescript-def/node.d.ts"/>
import net = module("net");

export interface Socket {

    logger: any;
    type: string;
    encoding: string;

    ip: string;
    port: number;

    connection: any; //net.NodeSocket

    onData: (data)=> void;
    onEnd: ()=> void;
    onError: (error)=> void;
    onClose: ()=> void;

    sendMessage: (data: any)=> void;
    messageCallback: (data)=> void;
    errorCallback: (err)=> void;

}