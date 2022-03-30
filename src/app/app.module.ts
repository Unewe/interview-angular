import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FocusInputComponent } from './questions/angular-questions/focus-input/focus-input.component';
import { HeaderComponent } from './components/header/header.component';
import { MultipleDirectivesComponent } from './questions/angular-questions/multiple-directives/multiple-directives.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import { ObserveInputComponent } from './questions/rxjs-questions/observe-input/observe-input.component';
import { SubscribeObservableComponent } from './questions/rxjs-questions/subscribe-observable/subscribe-observable.component';
import { NgTemplatesComponent } from './questions/angular-questions/ng-templates/ng-templates.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    FocusInputComponent,
    HeaderComponent,
    MultipleDirectivesComponent,
    ObserveInputComponent,
    SubscribeObservableComponent,
    NgTemplatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
