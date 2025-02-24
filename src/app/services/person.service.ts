import { Injectable } from '@angular/core';
import { Database, DataSnapshot, get, listVal, push, ref, remove, set } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Person } from '../../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private database : Database) { }

  /**
   * Metodo que nos devolvera todas las personas existentes
   */
  getAllPersons(){
    /*Obtenemos la referencia desde la base de datos*/
    const personRef = ref (this.database,"/persons");
    return listVal(personRef) as Observable<Person[]>;
  }

  /**
   * Metodo mediante el cual podremos borrar una persona
   */
  deletePerson(uid : string){
    /*Obtenemos la referencia de la persona que deseamos borrar mediante su uid*/
    const personRef = ref(this.database, `/persons/${uid}`);
    return remove(personRef) as Promise <void>;
  }

  /**
   * Metodo mediante el cual obtenemos a una persona por su uid
   */
  getPersonByUid(uid : string){
    const personRef = ref(this.database, `/persons/${uid}`);
    return get(personRef) as Promise <DataSnapshot>;
  }

  /**
   * Metodo que nos permitira crear una nueva persona, o editar una persona ya existente
   */
  savePerson (person : Person){
    let personRef = ref(this.database, `/persons/${person.uid}`);
    /*Si el uid de la persona esta vacio o es 0 significa que es una nueva persona, por lo que le asignamos un uid aleatorio*/
    if (person.uid == ""){
      let newPersonRef = ref (this.database, `/persons`);
      /*Se creara una nueva persona*/
      let uidRandom = push (newPersonRef);
      /*Se modificara el uid, que es 0, a uno aleatorio*/
      personRef = uidRandom;
      if (personRef.key != null){
        person.uid = personRef.key;
      }
    }

    return set(personRef,person) as Promise <void>;

  }



}
