import { Usuario } from "./usuario.model";

export interface Deuda {
  id: number; 
  cantidad: number; 
  descripcion: string;
  total: number; 
  usuario: Usuario;
}
