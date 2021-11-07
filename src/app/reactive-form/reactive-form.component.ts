import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  myForm!: FormGroup;
  visible: boolean = false;
  constructor(private fb:FormBuilder) {
    this.createForm()
  }
  createForm(){
    this.myForm =this.fb.group({
      username: [null,Validators.required],
      email:  [null,Validators.required],
      address:  [null,Validators.required],
      city: [null,Validators.required],
      phoneNumber: [null,Validators.min(10)],
      password:  [null,Validators.required],
      cPassword:  [null,Validators.required],
    })
  }

  ngOnInit(): void {  }
  onSubmit() {
    if (this.myForm.valid) {
      this.visible = true
    }
  }
}
