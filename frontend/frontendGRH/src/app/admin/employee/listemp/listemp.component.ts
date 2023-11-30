import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css']
})
export class ListempComponent implements OnInit{

  employee : any ; 
  constructor( private _emp:EmployeeService ) {}
  ngOnInit(): void {
   
    this._emp.getAll()
        .subscribe(
          res=>{
            this.employee = res; 
          },
          err=>{
            console.log(err); 
          }
        )
  }

  delete(id: any){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'

    }).then((result) => {
      if (result.isConfirmed) {
        
        this._emp.delete(id)
           .subscribe(
            res=>{
            Swal.fire(

              'deleted',
              'yourfile has been deleted . ',
              'success'

            )
              this.ngOnInit(); 
           },
           err=>{
            console.log(err);
           }
        )
      }
    })

  }
}
