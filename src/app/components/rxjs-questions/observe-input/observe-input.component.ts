import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {concatMap, fromEvent, map, mergeMap, switchMap} from "rxjs";
import {FakeService} from "../../../services/fake/fake.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-observe-input',
  templateUrl: './observe-input.component.html',
  styleUrls: ['./observe-input.component.scss']
})
export class ObserveInputComponent implements OnInit, AfterViewInit {
  @ViewChild("inputRef", {static: false})
  ref: ElementRef<HTMLInputElement> | undefined;
  field = new FormControl("");
  strings = new Array<string>();

  constructor(private fakeService: FakeService) {
  }

  ngOnInit(): void {
  }

  // TODO-1: Убрать дубликаты.
  // TODO-2: Выполнять запрос с задержкой.
  ngAfterViewInit(): void {
    if (this.ref) {
      fromEvent(this.ref.nativeElement, 'keyup')
        .pipe(
          untilDestroyed(this),
          map(event => (<HTMLInputElement>event.target).value),
          concatMap(value => this.fakeService.getString(value)),
        )
        .subscribe(value => {
          this.strings = [...this.strings, value];
        });
    }
  }
}
