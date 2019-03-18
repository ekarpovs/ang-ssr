import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserTransferStateModule  } from '@angular/platform-browser';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';


@NgModule({
    imports: [
        AppModule,
        BrowserModule.withServerTransition({ appId: 'ang-ssr' }),
        BrowserTransferStateModule
    ],
    bootstrap: [AppComponent]
})
export class AppBrowserModule { }
