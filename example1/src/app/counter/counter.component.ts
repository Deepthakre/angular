import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {//implements  OnInit {

 // constructor() { }

  //ngOnInit(): void {
  //}
  title="counter with angular "
  count=0
  counter(type:string){
    type==='add'?this.count++:this.count--;
  }

}
