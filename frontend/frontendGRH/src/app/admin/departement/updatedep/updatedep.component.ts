import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementService } from 'src/app/services/departement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatedep',
  templateUrl: './updatedep.component.html',
  styleUrls: ['./updatedep.component.css']

})

export class UpdatedepComponent implements OnInit{

  id: any; 
  departement: any ;

  constructor( private act: ActivatedRoute , private _dep:DepartementService , private router : Router) { }

  ngOnInit(): void {

    this.id = this.act.snapshot.paramMap.get('id');

    this._dep.getById(this.id)
       .subscribe(
        res=>{
          this.departement = res; 
        }
       )
  }
  
  save(){

    Swal.fire({
      
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'

    }).then((result) => {

      if (result.isConfirmed) {

        this._dep.update( this.id , this.departement)
        .subscribe(
          res=>{
            Swal.fire(
              'updated',
              'Your file has been update.',
              'success'
            )
            
            this.router.navigate(['/admin/departement/list'])

          },

          err=>{

          }
        )
        
      }
    })

  }

}
