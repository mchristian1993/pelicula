import {Component, Input, OnInit} from '@angular/core';
import {TypeCategorias} from '../type-peliculas';

@Component({
  selector: 'app-content-peliculas',
  templateUrl: './content-peliculas.component.html',
  styleUrls: ['./content-peliculas.component.css']
})

export class ContentPeliculasComponent implements OnInit {
  titulo = ' Lista de peliculas';
  @Input() categoria: TypeCategorias;

  constructor() {
  }

  ngOnInit() {
  }

}
