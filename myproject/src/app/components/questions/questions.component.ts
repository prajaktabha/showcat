import { Component, OnInit, Input } from "@angular/core";
import { Question } from "src/app/models/questions.model";
import { QuestionsService } from "src/app/services/questions.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"],
})
export class QuestionsComponent implements OnInit {
  que = new Question();
  @Input() quizname: string;
  category: any;
  type: any;
  submitted = false;

  constructor(private questionservice: QuestionsService,private router: Router) {}

  ngOnInit(): void {
    // this.getQuizName();
    // this.getCategoryName();
    this.getTypeName();
  }

  // saveTutorial(): void {
  //   const data = {
  //     questions: this.question.questions,
  //     option1: this.question.option1,
  //     option2: this.question.option2,
  //     option3: this.question.option3,
  //     option4: this.question.option4,
  //     answer: this.question.answer,
  //     quizid:this.question.quizid,
  //     typeid:this.question.typeid
  //   };

  //   this.questionservice.create(data)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.submitted = true;
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // newTutorial(): void {
  //   this.submitted = false;
  //   this.question = {
  //   questions: '',
  //   option1: '',
  //   option2: '',
  //   option3:'',
  //   option4:'',
  //   answer:'',
  //   quizid:'',
  //   typeid:''

  //   };
  // }

  addQuestion() {
    this.submitted = true;
    this.que.quizname = this.quizname;
    console.log(this.que, "This is from form");
    this.questionservice.addQuestion(this.que).subscribe((data) => {
      console.log(data);
      // alert(data);
    });
  }

  btnClick(){
    this.router.navigate(['/bt']);
}
  // getQuizName() {
  //   return this.questionservice.getQuizName().subscribe((que) => {
  //     this.quizname = que;
  //     console.log(this.quizname);
  //   });
  // }

  // getCategoryName() {
  //   return this.questionservice.getCategoryName().subscribe((que) => {
  //     this.category = que;
  //     console.log(this.category);
  //   });
  // }

  getTypeName() {
    return this.questionservice.getTypeName().subscribe((que) => {
      this.type = que;
      console.log(this.type);
    });
  }
}
