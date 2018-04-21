import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-viewed-painting',
  templateUrl: './viewed-painting.component.html',
  styleUrls: ['./viewed-painting.component.css']
})
export class ViewedPaintingComponent implements OnInit {

  @Input() viewedPainting: string;
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closed() {
    this.close.emit("0");
  }

}
