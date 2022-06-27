import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
class LocalState {
  public counter: number;
  constructor() {
    this.counter = 0;
  }
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public localStateData: LocalState = new LocalState();
  public localState = new BehaviorSubject<any>(this.localStateData); // Handle Local storage

  constructor() {
    if (localStorage.hasOwnProperty('localState')) {
      let localStorageData: any = localStorage.getItem('localState');
      this.localState.next(JSON.parse(localStorageData));
    }
    this.localState.subscribe((updatedData: any) => {
      this.localStateData = updatedData;
      localStorage.setItem('localState', JSON.stringify(this.localStateData));
    })

  }

  public updatedData(data: any) {
    this.localState.next(data);
    sessionStorage.setItem('localState', JSON.stringify(data))
  }

}
