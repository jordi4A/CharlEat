import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Comentario } from "../models/comentario.model";

@Injectable()
export class TablonService {

    private tablonRef = this.db.list<Comentario>('Tablon');  // Igual se puede quitar

    constructor (private db:AngularFireDatabase) {

    }

    addComentario(value: Comentario){
        return this.tablonRef.push(value);
      }
  
      removeComentario(value: Comentario){
        return this.tablonRef.remove(value.key);
      }
  
      getComentarios(){
        return this.tablonRef;
      }
      getComentario(comentario: Comentario){
        return this.db.list<Comentario>('Tablon', ref => ref.orderByChild("key").equalTo(comentario.key)); 
      }
}