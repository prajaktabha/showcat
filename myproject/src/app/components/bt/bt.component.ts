import { Component, OnInit } from "@angular/core";
import { TutorialService } from "src/app/services/tutorial.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Tutorial } from "src/app/models/tutorial.model";

@Component({
  selector: "app-bt",
  templateUrl: "./bt.component.html",
  styleUrls: ["./bt.component.scss"],
})
export class BtComponent implements OnInit {
  currentTutorial: Tutorial = {
    quizname: '',
    time: '',
    count: '',
    category:''
  };

  
 
  constructor(
    private tutorialService:TutorialService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
     this.getQuizes(this.route.snapshot.params.id);
    }

    getQuizes(id: string): void {
      this.tutorialService.get(id)
        .subscribe(
          data => {
            this.currentTutorial = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
}
