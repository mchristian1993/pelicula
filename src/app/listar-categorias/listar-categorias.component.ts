import {Component, Input, OnInit} from '@angular/core';
import {TypeCategorias} from '../type-peliculas';
import {CATEGORIAS} from '../model-peliculas';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {
  categorias = CATEGORIAS;
  selectedCategoria: TypeCategorias;
   @Input() name: string;
  constructor() {
  }

  ngOnInit() {
  }

  onSelect(categoria: TypeCategorias): void {
    this.selectedCategoria = categoria;
  }
}

