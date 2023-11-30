import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './admin/client/client.component';
import { AjoutdepComponent } from './admin/departement/ajoutdep/ajoutdep.component';
import { DepartementComponent } from './admin/departement/departement.component';
import { ListdepComponent } from './admin/departement/listdep/listdep.component';
import { UpdatedepComponent } from './admin/departement/updatedep/updatedep.component';
import { AjoutempComponent } from './admin/employee/ajoutemp/ajoutemp.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { ListempComponent } from './admin/employee/listemp/listemp.component';
import { UpdateempComponent } from './admin/employee/updateemp/updateemp.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

    { path: '' , redirectTo:'/admin', pathMatch:'full' },

    { path:'register' , component: RegisterComponent},

    { path:'login' , component: LoginComponent},

    { path: 'admin' , component: AdminComponent , children:[


      { path: '' , redirectTo:'departement', pathMatch:'full' },

      {path: 'departement' , component: DepartementComponent ,children:[

        { path:'' , redirectTo:'list' , pathMatch:'full'},
        { path: 'ajout' , component: AjoutdepComponent},
        { path: 'list' , component: ListdepComponent},
        {path: 'update/:id' , component: UpdatedepComponent},
        
      ]},

      { path:'client' , component: ClientComponent},



      { path:'employee' , component: EmployeeComponent , children:[

        { path:'' , redirectTo:'list' , pathMatch:'full'},
        { path:'list' , component: ListempComponent},
        { path:'ajout' , component: AjoutempComponent},
        { path:'update/:id' , component: UpdateempComponent}
        
        
      ]}


    ]},

    { path: '**' , component: NotfoundComponent},
    
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
