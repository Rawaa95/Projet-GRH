import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartementService } from 'src/app/services/departement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutdep',
  templateUrl: './ajoutdep.component.html',
  styleUrls: ['./ajoutdep.component.css']
})

export class AjoutdepComponent implements OnInit {

  dep = {
    name: '',
    description:'',
    etage: '',
    salle: ''
  }

constructor(private _departement: DepartementService , private router: Router) { }

ngOnInit(): void {

}

ajout(){

  this._departement.create(this.dep)
  .subscribe(
    res=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your departement has been saved',
        showConfirmButton: false,
        timer: 1500
      })

      this.router.navigate(['/admin/departement/list']);

    },
    err=>{ }
  )
}
}
