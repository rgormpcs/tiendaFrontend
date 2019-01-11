import { Component, OnInit, Inject, AfterContentChecked, AfterContentInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/categoria';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit, AfterContentInit {
  articuloForm: FormGroup;
  articulo: Articulo = {};
  categorias: Categoria[] = new Array();

  /*categorias: any[] = [
    {
      "id": "ju",
      "nombre": "jueguetes"
    },
    {
      "id": "ro",
      "nombre": "ropa"
    }
  ]*/


  constructor(private CategoriaService: CategoriaService, public dialogRef: MatDialogRef<AddArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private articuloService: ArticuloService) { }


  ngOnInit() {

    this.articuloForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: [''],
      url: ['', [Validators.required, Validators.minLength(5)]],
      precio: ['', [Validators.required, Validators.minLength(5)]],
      cantidad: ['', Validators.required],
      categoria: [''],
      descuento: ['']

    });

    this.CategoriaService.listar().subscribe(resp => {
      this.categorias = resp;
    });



    // console.log(this.articuloForm.get('nombre').value);
  }
  ngAfterContentInit() {
    this.articulo = this.data.articulo;
    //console.log(this.articulo.nombre);

    if (this.articulo.id) {
      this.articuloForm = this.formBuilder.group({
        nombre: [this.articulo.nombre, [Validators.required, Validators.minLength(5)]],
        descripcion: [this.articulo.descripcion],
        url: [this.articulo.url, [Validators.required, Validators.minLength(5)]],
        precio: [this.articulo.precio, [Validators.required, Validators.minLength(5)]],
        cantidad: [this.articulo.cantidad, Validators.required],
        categoria: [this.articulo.categoria],
        descuento: [this.articulo.descuento]

      });
    }
  }
  guardar(): void {
    

    let articulo: Articulo = {
      nombre: this.articuloForm.get('nombre').value,
      descripcion: this.articuloForm.get('descripcion').value,
      url: this.articuloForm.get('url').value,
      precio: this.articuloForm.get('precio').value,
      cantidad: this.articuloForm.get('cantidad').value,
      descuento: this.articuloForm.get('descuento').value,
      categoria: {
        id: this.articuloForm.get('categoria').value
      }

    };
    if (this.articulo.id) {
      articulo.id = this.articulo.id;
      this.articuloService.actualizar(articulo).subscribe(resp => {
        console.log(resp);
        this.dialogRef.close(resp);
      }, error => {
        console.log(error);
      });
    } else {
      this.articuloService.guardar(articulo).subscribe(resp => {
        console.log(resp);
        this.dialogRef.close(resp);
      }, error => {
        console.log(error);
        this.dialogRef.close(error);
      });

    }

  }

  borrar(){

  }
}

