import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public titulo: string = "Crear Cliente";

  public cliente: Cliente = new Cliente();


  public create(): void { 
    console.log("Clicked!");
    console.log(this.cliente);
  }

}
