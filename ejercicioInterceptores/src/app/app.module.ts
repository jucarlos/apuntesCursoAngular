import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LenguagesPipe } from './pipes/lenguages.pipe';
import { InterceptorService } from './interceptores/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LenguagesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true // para que esté pendiente de todas las peticiones
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
