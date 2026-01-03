import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quiz } from '../models/Quiz';
import { qs } from '../data/d';

@Component({
  selector: 'app-quiz2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz2.html',
  styleUrls: ['./quiz2.css'],
})
export class Quiz2 {

  data2:Quiz=new Quiz(qs);

  data = qs;
  page = 0;

answers: number[][] = [];

mode: 'quiz' | 'review' | 'submit' = 'quiz';


toggleAnswer(qi: number, optionId: number, event: Event) {
  if (!this.answers[qi]) {
    this.answers[qi] = [];
  }

  const checked = (event.target as HTMLInputElement).checked;

  if (checked) {
    this.answers[qi].push(optionId);
  } else {
    this.answers[qi] = this.answers[qi].filter(id => id !== optionId);
  }
}


  get progress(): number {
    return Math.round(
      ((this.page + 1) / this.data.questions.length) * 100
    );
  }

  next() {
    if (
      this.page < this.data.questions.length - 1 &&
      this.answers[this.page] !== undefined
    ) {
      this.page++;
    }
  }

  prev() {
    if (this.page > 0) {
      this.page--;
    }
  }
  isQuestionCorrect(qi: number): boolean {
    const correct = this.data.questions[qi].options
      .filter(o => o.isAnswer)
      .map(o => o.id);

    const user = this.answers[qi] || [];

    return (
      correct.length === user.length &&
      correct.every(id => user.includes(id))
    );
  }

isQuestionSelected():boolean{
  let rest:boolean=false;
  this.data2.questions.forEach(q=>{
  let selected=q.options.find(o=>o.isSelected);
  if(!selected){return false;

  }
  else{return true;
    
  }

  });
  return rest;
  
}}
