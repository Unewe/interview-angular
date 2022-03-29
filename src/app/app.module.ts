import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FocusInputComponent } from './components/angular-questions/focus-input/focus-input.component';
import { HeaderComponent } from './components/header/header.component';
import { MultipleDirectivesComponent } from './components/angular-questions/multiple-directives/multiple-directives.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import { ObserveInputComponent } from './components/rxjs-questions/observe-input/observe-input.component';

@NgModule({
  declarations: [
    AppComponent,
    FocusInputComponent,
    HeaderComponent,
    MultipleDirectivesComponent,
    ObserveInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
