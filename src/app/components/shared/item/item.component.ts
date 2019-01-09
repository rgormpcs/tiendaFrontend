import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() articulo: Articulo;

  constructor() { }

  ngOnInit() {
  }

}
