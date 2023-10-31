import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
LoginService
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private login: LoginService, private router: Router) { }


  formLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  iniciar() {
    const user = {
      email: this.formLogin.get('email')?.value,
      password: this.formLogin.get('password')?.value
    }
    this.login.login(user).subscribe(data => {
      console.log(data);
      // Ejemplo de redirección después de iniciar sesión exitosamente
      if (data.token) {
        // Guarda el token en el almacenamiento local o en una cookie si es necesario
        localStorage.setItem('token', data.token);
        // Redirige al usuario a la vista del tablero
        this.router.navigate(['/dashboard']);
      }
    }, error => {
      console.log(error);
    })
  }
}
