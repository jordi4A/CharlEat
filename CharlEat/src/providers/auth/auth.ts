import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private afAuth :  AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }
    // Metodo que nos permite registrar a un usuario nuevo. Si el email está cogido da error
    registerUser(email:string, password:string){
      return this.afAuth.auth.createUserWithEmailAndPassword( email, password)
      .then((res)=>{
       // El usuario se ha creado correctamente.
      })
      .catch(err=>Promise.reject(err))
   }
    // Método que nos permite iniciar sesion en una cuenta anteriormente creada
 loginUser(email:string, password:string){
  return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(user=>Promise.resolve(user))
    .catch(err=>Promise.reject(err))
}

// Recogemos la sesion guardada
get Session(){
  return this.afAuth.authState;
 }
  // Cerramos sesión
  logout(){
    this.afAuth.auth.signOut().then(()=>{
      
    })
  }
}
