import { Component, OnInit } from '@angular/core';
import { CancionesService } from '../../providers/canciones.service';
import { Cancion } from '../../models/cancion';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {

  canciones: Cancion[];
  cancion: Cancion;
  crearbtn: boolean;
  verForm: boolean;

  constructor(private cancionesService: CancionesService) {
    console.log('CancionesComponent contructor');

    this.canciones = [];
    this.cancion = new Cancion();
    this.crearbtn = false;
    this.verForm = false;
    //this.mockData();
    this.getCanciones();
  }

  ngOnInit() {
    console.log('CancionesComponent ngOnInit');
  }

  getCanciones() {
    this.canciones = [];
    this.cancionesService.getCanciones().subscribe(data => {
      if (data != null) {
        data.forEach(cancion => {
          this.canciones.push(cancion);
        });
      }
    });
  }

  verCancion(cancion: Cancion) {
    this.cancion = cancion;
    this.crearbtn = false;
    this.verForm = true;
  }

  crear() {
    this.cancion = new Cancion();
    this.crearbtn = true;
    this.verForm = true;
  }

  doneEvent(e) {
    this.getCanciones();
    this.verForm = false;
  }

  mockData() {
    this.canciones.push(new Cancion(1, 'macarena'));
    this.canciones.push(new Cancion(13, 'picachu'));
    this.canciones.push(new Cancion(2, 'revert'));
    this.canciones.push(new Cancion(14, 'javalist'));
    this.canciones.push(new Cancion(15, 'angular'));
    this.canciones.push(new Cancion(16, 'c#'));
    this.canciones.push(new Cancion(22, 'restful'));
    this.canciones.push(new Cancion(17, 'hardcoders'));
  }
}
