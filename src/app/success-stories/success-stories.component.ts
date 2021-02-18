import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css']
})
export class SuccessStoriesComponent implements OnInit {
  onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
}

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

}
