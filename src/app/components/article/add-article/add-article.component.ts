import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  articuloForm: FormGroup;
  categorias: any[] = [
    {
      "id": "ju",
      "nombre": "jueguetes"
    },
    {
      "id": "ro",
      "nombre": "ropa"
    }
  ]

  constructor(public dialogRef: MatDialogRef<AddArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder,private articuloService:ArticuloService) { }

  ngOnInit() {

    this.articuloForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: [''],
      url: ['', [Validators.required, Validators.minLength(5)]],
      precio: ['', [Validators.required, Validators.minLength(5)]],
      cantidad: ['', [Validators.required, Validators.minLength(5)]],
      categoria: [''],
      descuento: ['']

    });

    // console.log(this.articuloForm.get('nombre').value);
  }

  guardar():void{
    let articulo:Articulo ={
      nombre:this.articuloForm.get('nombre').value,
      descripcion:this.articuloForm.get('descripcion').value,
      url:this.articuloForm.get('url').value,
      precio:this.articuloForm.get('precio').value,
      cantidad:this.articuloForm.get('cantidad').value,
      descuento:this.articuloForm.get('descuento').value,
      categoria:{
        id:this.articuloForm.get('categoria').value
      }

    };
    this.articuloService.guardar(articulo).subscribe(resp =>{
      console.log(resp);
      this.dialogRef.close(resp);
    },error =>{
      console.log(error);
    })
    
  }
}

