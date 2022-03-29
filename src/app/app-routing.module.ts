import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FocusInputComponent} from "./components/angular-questions/focus-input/focus-input.component";
import {MultipleDirectivesComponent} from "./components/angular-questions/multiple-directives/multiple-directives.component";
import {ObserveInputComponent} from "./components/rxjs-questions/observe-input/observe-input.component";

const routes: Routes = [
  {path: "focus-input", component: FocusInputComponent},
  {path: "multiple-directives", component: MultipleDirectivesComponent},
  {path: "observe-input", component: ObserveInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
