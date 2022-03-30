import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FocusInputComponent} from "./questions/angular-questions/focus-input/focus-input.component";
import {MultipleDirectivesComponent} from "./questions/angular-questions/multiple-directives/multiple-directives.component";
import {ObserveInputComponent} from "./questions/rxjs-questions/observe-input/observe-input.component";
import {
  SubscribeObservableComponent
} from "./questions/rxjs-questions/subscribe-observable/subscribe-observable.component";
import {NgTemplatesComponent} from "./questions/angular-questions/ng-templates/ng-templates.component";

const routes: Routes = [
  {path: "focus-input", component: FocusInputComponent},
  {path: "multiple-directives", component: MultipleDirectivesComponent},
  {path: "ng-templates", component: NgTemplatesComponent},
  {path: "observe-input", component: ObserveInputComponent},
  {path: "subscribe-observable", component: SubscribeObservableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
