import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { questions } from '../questions-list';
import { Router } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  questions = questions;
  username: string;
  results = this.questions.filter(s => s.correctAnswer === s.userAnswer);

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
    });
  }
  logOut() {
// tslint:disable-next-line: prefer-const
    for (let value of this.questions) {
      value.userAnswer = '';
    }
    this.router.navigate(['']);
  }

}
