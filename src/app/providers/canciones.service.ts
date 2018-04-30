import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../GLOBAL';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CancionesService {

  constructor(private http: HttpClient) {
    console.log('CancionesService constructor');
  }

  getCanciones(): Observable<any> {
    let url = GLOBAL.endpoint + 'cancion/';
    return this.http.get(url);
  }

  postCancion(cancion): Observable<any> {
    let url = GLOBAL.endpoint + 'cancion/';
    console.log(cancion);
    
    return this.http.post(url, cancion);
  }

  putCancion(cancion): Observable<any> {
    let url = GLOBAL.endpoint + 'cancion/' + cancion.id;
    return this.http.put(url, cancion);
  }

  deleteCancion(id:number): Observable<any> {
    let url = GLOBAL.endpoint + 'cancion/' + id;
    return this.http.delete(url);
  }


}
