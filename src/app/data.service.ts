import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private sharedGoals =  new BehaviorSubject<any>(['Default Goal 1', 'Default Goal 2']);
  sharedGoal = this.sharedGoals.asObservable();

  constructor() { }

  sharedChangeGoal(g){
    this.sharedGoals.next(g);
  }

}
