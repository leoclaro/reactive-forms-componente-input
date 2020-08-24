import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DateWrapperComponent } from './date-wrapper/date-wrapper.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ],
  declarations: [
    AppComponent,
    DateWrapperComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }