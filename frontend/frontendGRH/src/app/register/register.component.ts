import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  admin = {

    name:'',
    email:'',
    password:''

  }

  constructor(private _auth: AuthService , private router: Router ) {}

  ngOnInit(): void{

  }

  save(){

    this._auth.register(this.admin)
.subscribe(
   res=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your account has been created',
      showConfirmButton: false,
      timer: 1500

    })
    this.router.navigate(['/login']);

  },

  err=>{
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'error in account creation',
      showConfirmButton: false,
      timer: 1500
    })


  }
)
  }
}
