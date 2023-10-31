import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ServicesComponent } from './components/services/services.component';
import { EquipmentComponent } from './components/equipment/equipment.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'products', component: ListProductsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'equipment', component: EquipmentComponent },
      { path: '', redirectTo: 'products', pathMatch: 'full' } // Redirecciona a 'products' por defecto en el dashboard
    ]
  }, // Agrega la ruta para el dashboard o la vista posterior al login
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Redirecciona el inicio a la página de inicio de sesión
  { path: '**', redirectTo: '/' } // Manejo de rutas no encontradas, redirige a la página de inicio de sesión
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
