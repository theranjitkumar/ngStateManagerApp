import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public stateService: StateService) { }

  public reduceCounter(){
    this.stateService.localStateData.counter--
    this.stateService.localState.next(this.stateService.localStateData);
  }

  public clearCounter(){
    this.stateService.localStateData.counter = 0;
    this.stateService.localState.next(this.stateService.localStateData);
  }

  ngOnInit(): void {
  }

}
