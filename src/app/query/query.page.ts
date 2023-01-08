import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-query',
  templateUrl: './query.page.html',
  styleUrls: ['./query.page.scss'],
})
export class QueryPage implements OnInit {
  public nombre: string = '';
  public tipo: string = '';
  public descripcion: string = '';
  public foto: string = '';

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.queryParams.subscribe(parametros => {
      this.nombre = parametros['nombre'] ||'no tiene nombre';
      this.tipo = parametros['tipo'] ||'no tiene tipo';
      this.descripcion = parametros['descripcion'] ||'no tiene descripcion';
      this.foto = parametros['foto'] ||'no tiene foto';
    })
  }

}
