import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';

import { AppComponent } from './app.component';


@NgModule({
    imports: [
        AppModule,
        BrowserModule.withServerTransition({ appId: 'ang-ssr' }),
        ServerModule,
        ServerTransferStateModule
    ],
    bootstrap: [AppComponent]
})
export class AppServerModule { }
