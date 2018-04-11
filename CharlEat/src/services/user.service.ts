import{ Injectable } from "@angular/core";
import{ AngularFireDatabase } from "angularfire2/database";
import{ User } from "../models/user.model";

@Injectable()

export class UserService {
        private usersRef = this.db.list<User>('UsuariosFirebase');
        constructor(private db:AngularFireDatabase){

        }   
        addUser(value:User){
            return this.usersRef.push(value);

        }
        getUsers(){
            return this.usersRef;

        }

        
}