import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public peso: number = 0;
  public titulo: string = 'Hello World';
  public nome: string = '';
  public sobrenome: string = '';
  public a: number = 0;
  public anoNascimento: number = 0;
  public anoAtual: number = 2022;
  salvar() {
    console.log('|-> ' + this.sobrenome + ' ' + this.nome);
  }

  calc() {
    this.a = this.anoAtual - this.anoNascimento;
    console.log(this.a);
    console.log('Idade: ' + (this.anoAtual - this.anoNascimento));
  }

  exibir() {
    console.log(this.peso);
  }
}
