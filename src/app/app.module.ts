import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { NewCaseSecuritiasComponent } from './NewCase/new-case-securitias/new-case-securitias.component';
import { NewCaseHomeComponent } from './NewCase/new-case-home/new-case-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewCaseSecuritiasComponent,
    NewCaseHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
