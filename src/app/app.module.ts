import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//modulos de terceros
import { PrimeNGModule } from './prime-ng/prime-ng.module';

//modulos personalizados
import { AppRoutingModule } from './app-routing.module';1
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//change locale
  import localeEs from '@angular/common/locales/es';
  import localeFr from '@angular/common/locales/fr';
  import { registerLocaleData } from '@angular/common';


  //configuracion del locale
  registerLocaleData( localeEs );
  registerLocaleData( localeFr );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeNGModule,
    SharedModule,
    VentasModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
