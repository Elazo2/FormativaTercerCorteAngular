import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = "Crear Usuario";
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      usernames: ['', Validators.required],
      contraseña: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.usuarioForm.valid) {
      alert('Formulario enviado exitosamente');
      this.usuarioForm.reset();
    } else {
      alert('Por favor complete todos los campos correctamente.');
    }
  }
}
