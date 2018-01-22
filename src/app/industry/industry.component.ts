import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private BfList1 = [" Payroll Processing", "Payables and Receivables", "Core Systems Integration", " Investments Management",
                    " Vouchers and Advices"];

private BfList2 = ["Inventory Tracking"," Work Orders processing", 
                    "Outsource and In-house Management","Job work Management", 
                    "Labelling and Bar-coding", "Quality and Compliance Management", " Bill Of Materials"
                  ]
}
