import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartementService } from 'src/app/services/departement.service';
import { EmployeeService } from 'src/app/services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutemp',
  templateUrl: './ajoutemp.component.html',
  styleUrls: ['./ajoutemp.component.css']
})

export class AjoutempComponent implements OnInit{

  departements: any;

  employee = {
    
    name: '',
    lastname: '',
    email: '',
    tel:'',
    address: '',
    idDep: '' 

  }

  image: any;

  selectImage(e: any){

    this.image = e.target.files[0]; 
  }
  constructor(  private _dep: DepartementService , private _emp: EmployeeService , private router: Router) {}

  ngOnInit(): void {

    this._dep.getAll()
    
    .subscribe(
      res=>{
          this.departements = res; 
        },
        err=>{
          console.log(err); 
        }
      )
    }
  
  ajout() {

    let fd = new FormData();

    fd.append( 'name' , this.employee.name);
    fd.append( 'lastname' , this.employee.lastname );
    fd.append( 'email' , this.employee.email );
    fd.append( 'tel' , this.employee.tel) ;
    fd.append( 'address' , this.employee.address);
    fd.append( 'idDep' , this.employee.idDep);
    fd.append( 'image' , this.image);

    this._emp.create(fd)
     .subscribe(
          res=>{

            Swal.fire(
              'Created!',
              'Your file has been created.',
              'success'
            )

            this.router.navigate(['/admin/employee/list']);

          },

          err=>{
            Swal.fire(
              'didin t created!',
              'error in creation',
              'error'
            )

               }
        )

  }

}