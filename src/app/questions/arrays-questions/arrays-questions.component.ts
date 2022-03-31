import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-arrays-questions',
  templateUrl: './arrays-questions.component.html',
  styleUrls: ['./arrays-questions.component.scss']
})
export class ArraysQuestionsComponent implements OnInit {
  users: Array<User> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.users = [
      new User("Tom", 21),
      new User("Jack", 33),
      new User("Victoria", 17),
      new User("Anna", 44),
      new User("Antony", 15),
    ];
  }

  adultsOnly(arr: Array<User>): Array<User> {
    return arr;
  }
}
