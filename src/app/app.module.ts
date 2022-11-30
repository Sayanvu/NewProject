import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCardComponent } from "./new/new-card/new-card.component";
import { NewListComponent } from './new/new-card/new-list/new-list.component';
import { Newlist_2Component } from "./new/new-card/newlist_2/newlist_2.component";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [	
        AppComponent, NewCardComponent, NewListComponent,Newlist_2Component,
      NavbarComponent
   ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,

    ]
})
export class AppModule { }
