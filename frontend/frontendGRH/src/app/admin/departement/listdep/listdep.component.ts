import { Component, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/services/departement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listdep',
  templateUrl: './listdep.component.html',
  styleUrls: ['./listdep.component.css']
})

export class ListdepComponent implements OnInit {

  departements : any;
  
  constructor( private _dep: DepartementService){ }


  ngOnInit(): void {
    
    this._dep.getAll()
        .subscribe(
          res=>{
            this.departements = res ;

          },
          err=>{
            console.log(err)
          }
        )
  }


  delete(id:any){
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
      this._dep.delete(id)
      .subscribe(
        res=>{

          this.ngOnInit();
          Swal.fire(
            'Deleted!',
            'Your dep has been deleted.',
            'success'
          )
        },
        err=>{
          console.log(err);
        }
      )
      }
})

  }
}
