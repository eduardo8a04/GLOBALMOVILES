import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../servicios/client.service';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.page.html',
  styleUrls: ['./adminlist.page.scss'],
})
export class AdminlistPage implements OnInit {

  products: any;
  productCodigo: string;
  productCategoria: string;
  productNombre: string;
  productDescripcion: string;
  productPrecio: number;
 
  constructor(private clientService: ClientService) { }
 
  ngOnInit() {
    this.clientService.read_Clients().subscribe(data => {
 
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
 
  CreateRecord() {
    let record = {};
    record['Codigo'] = this.productCodigo;
    record['Categoria'] = this.productCategoria;
    record['Nombre'] = this.productNombre;
    record['Descripcion'] = this.productDescripcion;
    record['Precio'] = this.productPrecio;
      this.clientService.create_NewClient(record).then(resp => {
      this.productCodigo = "";
      this.productCategoria = "";
      this.productNombre = "";
      this.productDescripcion = "";
      this.productPrecio = undefined;

      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
 
  RemoveRecord(rowID) {
    this.clientService.delete_Client(rowID);
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditCodigo = record.Codigo;
    record.EditCategoria = record.Categoria;
    record.EditNombre = record.Nombre;
    record.EditDescripcion = record.Descripcion;
    record.EditPrecio = record.Precio;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['Codigo'] = recordRow.EditCodigo;
    record['Categoria'] = recordRow.EditCategoria;
    record['Nombre'] = recordRow.EditNombre;
    record['Descripcion'] = recordRow.EditDescripcion;
    record['Precio'] = recordRow.EditPrecio;
    this.clientService.update_Client(recordRow.id, record);
    recordRow.isEdit = false;
  }
  
 
 
}
