import { Component, EventEmitter, INJECTOR, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = ""; /* Aqui criamos um input da variavel title que será uma string, inserimos seu valor em cada page, exemplo na login.component.html */
  @Input() primaryBtnText: string = ""; /* Fazemos o mesmo esquema de input nos buttons*/
  @Input() secondaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();

  @Output("navigate") onNavigate = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
  
  navigate(){
    this.onNavigate.emit();
  }
}