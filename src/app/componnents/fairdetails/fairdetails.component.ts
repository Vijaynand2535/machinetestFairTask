import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from 'src/app/models/fair';

@Component({
  selector: 'app-fairdetails',
  templateUrl: './fairdetails.component.html',
  styleUrls: ['./fairdetails.component.scss']
})
export class FairdetailsComponent implements OnInit {
  @Input() getfairdetails !: Ifair
  constructor() { }

  ngOnInit(): void {
  }

}
