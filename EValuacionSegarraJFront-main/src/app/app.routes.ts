import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'inicio',
      loadComponent: () =>
        import('./components/inicio/inicio.component').then((m) => m.InicioComponent),
    },
    {
      path: 'ingresar',
      loadComponent: () =>
        import('./components/ingresar/ingresar.component').then((m) => m.IngresarComponent),
    },
    {
      path: 'listar',
      loadComponent: () =>
        import('./components/listar/listar.component').then((m) => m.ListarComponent),
    },
    {
      path: '**',
      redirectTo: '/inicio',
    },
  ];
  