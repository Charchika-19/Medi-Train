import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing1',
  templateUrl: './landing1.component.html',
  styleUrls: ['./landing1.component.scss']
})
export class Landing1Component implements OnInit {
  message: string;

  constructor() {
    this.message = 'Welcome to the Landing Page!';
  }

  ngOnInit(): void {
  }

}
