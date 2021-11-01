import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup
  visible: boolean = false;
  constructor() {
    this.myForm = new FormGroup({
      username: new FormControl("Atts"),
      email: new FormControl(""),
      address: new FormControl(""),
      city: new FormControl(""),
      phoneNumber: new FormControl(""),
      password: new FormControl(""),
      cPassword: new FormControl(""),
    })
  }

  ngOnInit(): void {  }
  onSubmit() {
    if (this.myForm.value) {
      this.visible = true
    }
  }
}
