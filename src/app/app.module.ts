import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ModalService } from './services/modal.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ServicesComponent } from './components/services/services.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListProductsComponent,
    ModalComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ServicesComponent,
    EquipmentComponent,
    PaginatorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
