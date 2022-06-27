import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public stateService: StateService) { }

  // public increaseCounter(){
  //   this.stateService.localState.counter++
  //   this.stateService.localState.next(this.stateService.localState.counter);
  // }

  public clearCounter(){
    this.stateService.localStateData.counter = 0;
    this.stateService.localState.next(this.stateService.localStateData);
  }

  ngOnInit(): void {
  }

}
