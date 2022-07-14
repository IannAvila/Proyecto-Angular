import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcumuladorModule } from './acumulador/acumulador.module';


import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    DbzModule,
    BrowserModule,
    HeroesModule,
    AcumuladorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
