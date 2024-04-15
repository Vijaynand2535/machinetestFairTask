import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifair } from 'src/app/models/fair';

@Component({
  selector: 'app-faircard',
  templateUrl: './faircard.component.html',
  styleUrls: ['./faircard.component.scss']
})
export class FaircardComponent implements OnInit {
  @Input() getfair !: Ifair
  @Output() getfaircards : EventEmitter<Ifair> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onCardclick(){
    this.getfaircards.emit(this.getfair)
  }

}
