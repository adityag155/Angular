import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { FormsModule } from '@angular/forms';
import { EmpComponent } from './emp/emp.component';

//import for http client in app module
import {HttpClientModule} from '@angular/common/http';
import { StudComponent } from './stud/stud.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmpComponent,
    StudComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
