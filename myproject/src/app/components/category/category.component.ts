import { Component, OnInit } from "@angular/core";
import { TutorialService } from "src/app/services/tutorial.service";
import { Category } from "src/app/models/category.model";
import { Tutorial } from "src/app/models/tutorial.model";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
  // currentCategory?: Category;

  // quizes?: Tutorial[];

  // categories?: Category[];

  // categories: Category = {
  //   category: " ",
  // };
  tutorials?: Tutorial[];
  currentTutorial?: Category;
  currentIndex = -1;
  constructor(private categoryservice:TutorialService) {}

  ngOnInit(): void {
    this.retrieveCategories();
  }
  // setActiveTutorial(category: Category, index: number): void {
  //   this.currentCategory = category;
  //   this.getCategorybyId(this.currentCategory.id);
  // }

  // getCategorybyId(id: any): void {
  //   this.categoryservice.getQuize(id).subscribe(
  //     (data) => {
  //       this.quizes = data;
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // retriveallcategory(): void {
  //   this.categoryservice.getCategoryName().subscribe(
  //     (data) => {
  //       this.categories = data;
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  retrieveCategories(): void {
    this.categoryservice.getCat()
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveCategories();
    this.currentTutorial = undefined;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Category, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }





}
