import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public titulo: string = "Crear Cliente";

  public cliente: Cliente = new Cliente();

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) 
    {}

    ngOnInit(): void {
      this.getCliente();
    }

  //Metodo para crear un cliente
  create(): void { 
    this.clienteService.create(this.cliente)
    .subscribe(cliente =>  {
      this.router.navigate(['/clientes'])
      swal.fire('Nuevo Cliente', `Cliente ${cliente.nombre} creado con éxito!`, 'success')
    }
    );
  }

  //Metodo para obtener un cliente
  getCliente(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente)  
      }
    });
  }


  //Metodo para actualizar un cliente
  update(): void{
    this.clienteService.update(this.cliente).subscribe (cliente => {
      this.router.navigate(['/clientes'])
      swal.fire('Cliente Actualizado', `Cliente ${cliente.nombre} actualizado con éxito!`, 'success')
    });
  }

    
}
