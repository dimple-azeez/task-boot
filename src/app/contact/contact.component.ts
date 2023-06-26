import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { Router } from "@angular/router";



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

userForm:FormGroup;
  constructor(private fb:FormBuilder, private router:Router) { }
  ngOnInit(): void {
    this.userForm=this.fb.group({
      bookName:[''],
      authorName:['']
      
    })
  
  }

  

onFormSubmit(){
  let userObj=this.userForm.value
  console.log(userObj)
  this.router.navigateByUrl('home');

  

}
  

  // GETTERS 
get bookname(){
  return this.userForm.get('bookName');
}
get authorname(){
  return this.userForm.get('authorName');
}
}


