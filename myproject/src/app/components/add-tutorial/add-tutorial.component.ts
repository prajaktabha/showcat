import { Component, OnInit } from "@angular/core";
import { Tutorial } from "src/app/models/tutorial.model";
import { TutorialService } from "src/app/services/tutorial.service";

@Component({
  selector: "app-add-tutorial",
  templateUrl: "./add-tutorial.component.html",
  styleUrls: ["./add-tutorial.component.scss"],
})
export class AddTutorialComponent implements OnInit {
  // mydata: any;
  // tutorial: Tutorial = {
  //   quizname: "",
  //   time: "",
  //   count: "",
  //   categoryid: "",
  // };

  // cid: any = 0;
  // submitted = false;
  // catName = " ";

  
  quiz = new Tutorial();
  category : any;
  submitted = false;
  
  constructor(private tutorialService: TutorialService) {}


  ngOnInit(): void {
   
    this.getCategoryName();
    
  }

  getCategoryName() {
    return this.tutorialService.getCategoryName()
      .subscribe(
        quiz =>{
          this.category = quiz;
          console.log( this.category);
        } 
    );
  }

  
  addQuize(){
    
    this.submitted = true;
    console.log(this.quiz, "This is from form")
    this.tutorialService.addQuize(this.quiz).subscribe(data=>{
      console.log(data);
      // alert(data);
    })
  }

  // saveTutorial(): void {
  //   const data = {
  //     quizname: this.tutorial.quizname,
  //     time: this.tutorial.time,
  //     count: this.tutorial.count,
  //     categoryid: this.tutorial.categoryid,
  //   };

  //   this.tutorialService.create(data).subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.submitted = true;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // getTutId() {
  //   this.tutorialService.getcatid(this.catName).subscribe((res) => {
  //     this.mydata = res;
  //     this.cid = this.mydata.id;
  //     console.log(this.mydata.id);
  //     console.log(res);
  //   });
  // }

//   newTutorial(): void {
//     this.submitted = false;
//     this.tutorial = {
//       quizname: "",
//       time: "",
//       count: "",
//       categoryid: "",
//     };
//   }
// }
}