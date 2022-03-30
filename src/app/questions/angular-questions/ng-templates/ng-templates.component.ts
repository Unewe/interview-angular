import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-ng-templates',
  templateUrl: './ng-templates.component.html',
  styleUrls: ['./ng-templates.component.scss']
})
export class NgTemplatesComponent implements OnInit {
  show: boolean = true;
  users: Array<string> = ["John", "Helen", "Antony"];

  constructor() { }

  ngOnInit(): void {
  }

}
