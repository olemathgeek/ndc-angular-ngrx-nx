import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { MaterialModule } from '@demo-app/material';
import { RouterModule } from '@angular/router';

const COMPONENTS = [LayoutComponent];

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class LayoutModule {}
