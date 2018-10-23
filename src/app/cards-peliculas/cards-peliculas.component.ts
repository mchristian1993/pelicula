import {Component, OnInit, Input} from '@angular/core';
import {TypeCategorias} from '../type-peliculas';
import {CATEGORIAS} from '../model-peliculas';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cards-peliculas',
  templateUrl: './cards-peliculas.component.html',
  styleUrls: ['./cards-peliculas.component.css']
})
export class CardsPeliculasComponent implements OnInit {
  @Input() categoria: TypeCategorias;
  categorias = CATEGORIAS;
  id: number = null;

  constructor(private route: ActivatedRoute) {

    this.id = this.route.snapshot.params['id'];

  }

  ngOnInit() {
  }


}
