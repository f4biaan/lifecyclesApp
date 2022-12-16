import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [],
})
export class Pagina1Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  nombre: string = 'f4biaan';
  segundos: number= 0;
  timerSubscription!: Subscription;

  // hook de ciclo de vida de Angular cuando sucede algo en el componente durante el ciclo de vida de un componente
  // se ejecuta cuando el componente se crea o se carga/construye el componente

  // ver en consola cuando se ejecuta cada uno de los hooks
  constructor() {
    // lugar para poner codigo que necesitamos que se ejecute cuando se construye el componente
    console.log('Constructor');
  }
  ngOnInit(): void {
    // el componente ya esta constrido
    console.log('ngOnInit');
    this.timerSubscription = interval(1000).subscribe((i) => {
      console.log(i);
      this.segundos = i;
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    // se usa para terminar componente y evitar fugas de memoria en la aplicacion
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('timerSubscription terminado');
  }

  //
  guardar(){}
}
