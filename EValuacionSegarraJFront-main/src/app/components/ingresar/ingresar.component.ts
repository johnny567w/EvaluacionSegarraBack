import { Component } from '@angular/core';

import { Usuario } from '../../modelos/usuario.model';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../Services/service.service';

@Component({
  selector: 'app-ingresar',
  standalone: true,
  imports: [ NgIf, FormsModule],
  templateUrl: './ingresar.component.html',
})
export class IngresarComponent {
  
  usuario: Usuario = { cedula: '', nombre: '',partidoPolitico: '' };
  
  mensaje: string = '';

  constructor(private appService: AppService) {}

  agregarUsuario() {
    this.appService.crearUsuario(this.usuario).subscribe({
      next: () => {
        this.mensaje = ' Usuario agregado correctamente.';
      },
      error: () => {
        this.mensaje = ' Error al agregar el usuario.';
      }
    });
  }

}
