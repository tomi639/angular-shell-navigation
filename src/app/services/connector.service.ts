import { Injectable } from '@angular/core';
import { ShellSdk, SHELL_EVENTS } from 'fsm-shell';


@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  private SHELL_SDK!: ShellSdk;
  client_id = 'fsm-test-extension';

  constructor() {
    if(ShellSdk.isInsideShell()) 
      this.SHELL_SDK = ShellSdk.init(parent, '*');
  }

  getContext() {
    if(!this.SHELL_SDK) {
      console.log('App is not running inside shell');
      return;
    }

    // this.SHELL_SDK.emit(SHELL_EVENTS.Version1.REQUIRE_CONTEXT, {
    //   clientIdentifier: this.client_id,
    //   auth: {
    //     response_type: 'token'
    //   }
    // });

    const Payload = 'Cockpit_SelectedLocale';
    this.SHELL_SDK.emit(SHELL_EVENTS.Version1.GET_STORAGE_ITEM, Payload);
    this.SHELL_SDK.on(SHELL_EVENTS.Version1.GET_STORAGE_ITEM, (locale:any) => {
      if (locale) {
        console.log(locale);
      }
      
    })
    
  }



}
