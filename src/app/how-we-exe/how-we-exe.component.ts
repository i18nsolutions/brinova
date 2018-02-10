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
  public BfList3=["Recruit the Right Resources","Select the Right Development Process","Make Sound Estimations",
                  "Define Smaller Milestones","Define Complete Requirements","Define System Architecture",
                  "Optimize Design"];
<<<<<<< HEAD
  private BfList4=["Effective Code Implementation","Rigourous Testing and Validation",
  "Documentation of Requirement & Design aspects","Iterative Reviews","Project Control Management",
=======
  public BfList4=["Effective Code Implementation","Rigourous Testing and Validation",
  "Documentation of Requirement and Design aspects","Iterative Reviews","Project Control Management",
>>>>>>> 297e34eb1b9519184211d99da98cadf315b97bc5
  "Quality Control","User Acceptance and Deployment"];

}
