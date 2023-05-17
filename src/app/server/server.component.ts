import { Component} from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    ServerId: number =10;
    serverStatus: string='offline';

    constructor(){
        this.serverStatus= Math.random() >0.5 ? 'online' : 'offline'
    }

    getserverstatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red' ;
    }

}