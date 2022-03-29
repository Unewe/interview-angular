import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor() { }

  getString(value: string, d: number = 1000): Observable<string> {
    console.log(`FakeService.getString(${value}, ${d})`);
    return of(value).pipe(delay(d));
  }
}
