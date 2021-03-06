import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public stateService: StateService) { }

  public increaseCounter(){
    this.stateService.localStateData.counter++
    // this.stateService.updatedData(this.stateService.localStateData);
    this.stateService.localState.next(this.stateService.localStateData);
  }

  public clearCounter(){
    this.stateService.localStateData.counter = 0;
    this.stateService.localState.next(this.stateService.localStateData);
  }

  ngOnInit(): void {
  }

}
