import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
   visible = false
  constructor() { }

  ngOnInit(): void {
  }
  onClickSubmit(value: any) {

    if (value) {
      this.visible = true
    }
    console.log(value);
  }

  }

