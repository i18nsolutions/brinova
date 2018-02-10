import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-we-exe',
  templateUrl: './how-we-exe.component.html',
  styleUrls: ['./how-we-exe.component.css']
})
export class HowWeExeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private BfList3=["Recruit the Right Resources","Select the Right Development Process","Make Sound Estimations",
                  "Define Smaller Milestones","Define Complete Requirements","Define System Architecture",
                  "Optimize Design"];
  private BfList4=["Effective Code Implementation","Rigourous Testing and Validation",
  "Documentation of Requirement & Design aspects","Iterative Reviews","Project Control Management",
  "Quality Control","User Acceptance and Deployment"];

}
