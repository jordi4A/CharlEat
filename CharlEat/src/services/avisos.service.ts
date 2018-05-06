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

    getAvisos(){
      return this.avisosRef;
    }
}
