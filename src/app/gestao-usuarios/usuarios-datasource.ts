import { MatTableDataSource } from "@angular/material/table";
import { IUsuario } from "src/interfaces/interface";
import { GestaoUsuariosService } from '../gestao-usuarios.service';


export class UsuariosDatasource extends MatTableDataSource<IUsuario> {

    idItem: string = ""

    constructor(private service:GestaoUsuariosService) {
      super();
      this.consultarUsuarios();
    }

    consultarUsuarios(){
      this.service.consultarUsuarios().subscribe(data =>this.data = data)
    }
  }
