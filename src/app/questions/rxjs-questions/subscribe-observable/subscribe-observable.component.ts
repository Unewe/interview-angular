import { Component, OnInit } from '@angular/core';
import {interval, map} from "rxjs";

@Component({
  selector: 'app-subscribe-observable',
  templateUrl: './subscribe-observable.component.html',
  styleUrls: ['./subscribe-observable.component.scss']
})
export class SubscribeObservableComponent implements OnInit {
  // TODO Выводить данные в формате "Counter is 1 ... n".
  counter = interval(1000).pipe(map(value => `Counter is ${value}`));
  constructor() { }

  ngOnInit(): void {
  }

}
