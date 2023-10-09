import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { HightLightDirective } from './hight-light.directive';

@NgModule({
  declarations: [ListComponent, HightLightDirective],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListComponent,
      },
    ]),
  ],
})
export class ListModule {}
