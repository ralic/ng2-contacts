import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { TablePagination } from './table/table';
import { TableElementsCount } from './table/table';
import { TableSort } from './table/table';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    TableElementsCount,
    TablePagination,
    TableSort,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
