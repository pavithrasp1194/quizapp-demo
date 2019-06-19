import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { questions } from '../questions-list';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  questions = questions;
  currentQuestion = 1;
  username: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');

    });
  }

  nextQuestion(questionId: number) {
    this.currentQuestion = questionId + 1;
  }

  prevQuestion(questionId: number) {
    this.currentQuestion = questionId - 1;
  }

}
