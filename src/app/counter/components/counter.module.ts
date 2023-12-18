import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter/counter.component";

// Aqui podemos definir y agrupar nuestros componentes.
@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {}
