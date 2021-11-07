import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
   visible = false
   model: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  onClickSubmit(value: any) {

    if (value) {
    //  if( value.phoneNumber.length>10){
      // alert('Phone number is not valid')
      this.visible = true
    //  };
    }
    console.log(value);
  }

  }

