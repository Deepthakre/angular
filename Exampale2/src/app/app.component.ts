import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'GetData';
  constructor(private toastr: ToastrService){}

  getValue(val:any){
  console.log(val)
}  


showSuccses(){
  this.toastr.success  ('thank you for submitting form');
}

showError(){
  this.toastr.error  ('thank you for submitting form');
}

}
