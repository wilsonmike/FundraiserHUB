import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.css']
})
export class GetstartedComponent implements OnInit {
  // tslint:disable-next-line:typedef
  onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
}

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

}
