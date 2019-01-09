import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}  
    ngOnInit() {
    }  
  }

