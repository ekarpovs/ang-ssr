import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserTransferStateModule  } from '@angular/platform-browser';
import {TransferHttpCacheModule} from '@nguniversal/common';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';


@NgModule({
    imports: [
        AppModule,
        BrowserModule.withServerTransition({ appId: 'ang-ssr' }),
        BrowserTransferStateModule,
        TransferHttpCacheModule
    ],
    bootstrap: [AppComponent]
})
export class AppBrowserModule { }
