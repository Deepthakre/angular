import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  formValue!:FormGroup
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      name:[''],
      Gendar:[''],
      Email:[''],
      Address:[''],
      MobaileNo:[''],
      fild:[''],
      Subject:[''],
      Action:[''],
    })
  }

}
