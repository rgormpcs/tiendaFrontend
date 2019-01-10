import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/services/articulo.service';
import { AddArticleComponent } from '../add-article/add-article.component';
import { MatDialog } from '@angular/material';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss'],
})
export class ListArticleComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'descripcion', 'precio', 'cantidad', 'acciones'];
  dataSource = new Array();

  constructor(private ArticuloService: ArticuloService, public dialog: MatDialog) {
    
   }

  ngOnInit() {
    this.ArticuloService.listar().subscribe(resp => {
      this.dataSource = resp;
    })
  }
  editar(): void {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddArticleComponent, {
      width: '650px',
      data: {name: ""}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ArticuloService.listar().subscribe(resp=>{
        this.dataSource = resp;
      });
      //this.animal = result;
    });
  }
}
