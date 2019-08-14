import { Component, OnInit } from '@angular/core';
import { ListproductService } from './../servicios/listproduct.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
 
 products: any;
  productCodigo: string;
  productCategoria: string;
  productNombre: string;
  productDescripcion: string;
  productPrecio: number;
  constructor(private listproductService: ListproductService, router: Router) { }
 
  ngOnInit() {
    this.listproductService.read_Clients().subscribe(data => {
 
      this.products = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Codigo: e.payload.doc.data()['Codigo'],
          Categoria: e.payload.doc.data()['Categoria'],
          Nombre: e.payload.doc.data()['Nombre'],
          Descripcion: e.payload.doc.data()['Descripcion'],
          Precio: e.payload.doc.data()['Precio'],
        };
      })
      console.log(this.products);
 
    });
 
}
}
