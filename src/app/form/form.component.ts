import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  username = '';
  userflag = false;
  enableButton(event){
  	var x = event.target.value;
  	if( x !== '' ){
  		this.userflag = true;
  		
  	}  
  	else {
  		this.userflag = false;
  	} 
  }
  resetUsername(){
  
  this.username = '';

   }
   

  constructor() { }

  ngOnInit() {
  }

}
