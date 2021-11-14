import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
editProfile:Boolean=false;


profile:any={};
profileForm:any;
localProfileData:any;

  constructor() { }

  ngOnInit(): void {

    this.profileForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
      pincode: new FormControl(''),
      lat: new FormControl(''),
      lon: new FormControl(''),
    })

    this.localProfileData=localStorage.getItem('profile')

 if(this.localProfileData!=undefined){
      this.localProfileData=JSON.parse(this.localProfileData)

      this.profile=this.localProfileData;

    }else{
      this.profile={"name":"Logesh", "email":"test@check.io", "phone":"8074658888", "address":"st, Trichy", "pincode":"621104", "lat":"10.7904833N", "lon":"78.7046725E"}

        localStorage.setItem('profile', JSON.stringify(this.profile))
    }



  }

editProfileFun(){
  this.profileForm.patchValue( this.profile)
this.editProfile=true;
  }

  submit(){
    alert('Saved Successfully!')
    console.log(this.profile)
   localStorage.setItem('profile', JSON.stringify(this.profileForm.value))
   this.editProfile=false;
   this.ngOnInit();
  }


}
