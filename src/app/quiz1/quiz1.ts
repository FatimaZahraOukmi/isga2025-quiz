import { Component } from '@angular/core';
import { qs } from '../data/d';

@Component({
  selector: 'app-quiz1',
  imports: [],
  templateUrl: './quiz1.html',
  styleUrl: './quiz1.css',
})
export class Quiz1 {
data=qs;
page=0;

 back(){
  this.page>0 &&
  this.page--
}

next() {
    if (this.page < this.data.questions.length - 1) {
      this.page++;
    }
  }  


}