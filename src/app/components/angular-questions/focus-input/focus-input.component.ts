import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-focus-input',
  templateUrl: './focus-input.component.html',
  styleUrls: ['./focus-input.component.scss']
})
export class FocusInputComponent implements OnInit, AfterViewInit {

  constructor() { }

  name = new FormControl('');

  @ViewChild("nameRef")
  element: ElementRef<HTMLInputElement> | undefined;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  focusInput() {
    this.element?.nativeElement.focus();
  }
}
