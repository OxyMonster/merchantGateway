import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { UtileSericeService } from './services/utile-serice.service';
import { CardComponent } from './components/card/card.component';

const COMPONENTS = [ 
  LoadingSpinnerComponent,
  CardComponent
]

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule
  ],
  providers: [
    UtileSericeService
  ], 
  exports: COMPONENTS
})
export class SharedModule { }
