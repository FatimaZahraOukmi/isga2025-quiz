import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Quiz1 } from "./quiz1/quiz1";
import { Quiz2 } from "./quiz2/quiz2";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Quiz1, Quiz2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('isga2025');
}
