import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './admin/header/header.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { FooterComponent } from './admin/footer/footer.component';
import { DepartementComponent } from './admin/departement/departement.component';
import { ClientComponent } from './admin/client/client.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { AjoutdepComponent } from './admin/departement/ajoutdep/ajoutdep.component';
import { ListdepComponent } from './admin/departement/listdep/listdep.component';
import { UpdatedepComponent } from './admin/departement/updatedep/updatedep.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AjoutempComponent } from './admin/employee/ajoutemp/ajoutemp.component';
import { UpdateempComponent } from './admin/employee/updateemp/updateemp.component';
import { ListempComponent } from './admin/employee/listemp/listemp.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    NotfoundComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DepartementComponent,
    ClientComponent,
    EmployeeComponent,
    AjoutdepComponent,
    ListdepComponent,
    UpdatedepComponent,
    AjoutempComponent,
    UpdateempComponent,
    ListempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
