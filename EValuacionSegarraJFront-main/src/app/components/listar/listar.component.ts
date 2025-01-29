import { Component, OnInit } from '@angular/core';
import { Deuda } from '../../modelos/deuda.model';
import { Usuario } from '../../modelos/usuario.model';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../Services/service.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './listar.component.html',
})
export class ListarComponent implements OnInit {
  usuarios: Usuario[] = [];
  deudas: Deuda[] = [];
  
  cedulaBusqueda: string = '';
  usuarioEspecifico?: Usuario;
  deudasFiltradas: Deuda[] = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.cargarUsuarios();
    this.cargarDeudas();
  }

  cargarUsuarios() {
    this.appService.getUsuarios().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }

  cargarDeudas() {
    this.appService.getDeudas().subscribe((data: Deuda[]) => {
      this.deudas = data;
    });
  }



  buscarUsuarioPorCedula() {
    if (!this.cedulaBusqueda) return;

    this.appService.getUsuarioPorCedula(this.cedulaBusqueda).subscribe((usuario: Usuario) => {
      this.usuarioEspecifico = usuario;
      this.deudasFiltradas = this.deudas.filter(d => d.usuario.cedula === this.cedulaBusqueda);
    });
  }
}
