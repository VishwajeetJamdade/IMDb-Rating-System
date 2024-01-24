import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MoveiDetailComponent } from './movei-detail/movei-detail.component';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoveiDetailComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
