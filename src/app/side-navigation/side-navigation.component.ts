import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {
  title = 'angularbootstrap';


  constructor() { }

  ngOnInit(): void {
               // tslint:disable-next-line:typedef
               // tslint:disable:only-arrow-functions
               // tslint:disable-next-line:typedef
               $('#menu-toggle').click(function(e) {
                e.preventDefault();
                $('#wrapper').toggleClass('toggled');
              });
  }

}
