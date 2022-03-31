import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FocusInputComponent} from "./questions/angular-questions/focus-input/focus-input.component";
import {MultipleDirectivesComponent} from "./questions/angular-questions/multiple-directives/multiple-directives.component";
import {ObserveInputComponent} from "./questions/rxjs-questions/observe-input/observe-input.component";
import {
  SubscribeObservableComponent
} from "./questions/rxjs-questions/subscribe-observable/subscribe-observable.component";
import {NgTemplatesComponent} from "./questions/angular-questions/ng-templates/ng-templates.component";
import {ArraysQuestionsComponent} from "./questions/arrays-questions/arrays-questions.component";

const routes: Routes = [
  {path: "focus-input", component: FocusInputComponent},
  {path: "multiple-directives", component: MultipleDirectivesComponent},
  {path: "ng-templates", component: NgTemplatesComponent},
  {path: "observe-input", component: ObserveInputComponent},
  {path: "subscribe-observable", component: SubscribeObservableComponent},
  {path: "arrays", component: ArraysQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
