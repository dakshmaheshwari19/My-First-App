import { Component} from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    ServerId: number =10;
    Serverstatus: string='offline';

    getserverstatus(){
        return this.Serverstatus;
    }

}