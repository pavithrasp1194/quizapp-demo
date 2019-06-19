import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { questions } from '../questions-list';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  questions = questions;
  username: string;
  results = this.questions.filter(s => s.correctAnswer === s.userAnswer);

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
    });
  }

}
