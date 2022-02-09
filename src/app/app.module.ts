import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule],
  declarations: [ AppComponent, TestComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
