import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Aviso } from "../models/aviso.model";

@Injectable()
export class AvisosService {

    private avisosRef = this.db.list<Aviso>('Avisos'); 

    constructor (private db:AngularFireDatabase) {

    }

    addAviso(value: Aviso){
      return this.avisosRef.push(value);
    }

    removeAviso(value: Aviso){
      return this.avisosRef.remove(value.key);
    }

    getAvisosUsuario(usuario: string){
      this.avisosRef = this.db.list<Aviso>('Avisos', ref => ref.orderByChild("nombre_usuario").equalTo(usuario));
      return this.avisosRef;
    }
    getAvisos(){
      return this.avisosRef;
    }
}
