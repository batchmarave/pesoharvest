import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab5Component } from './tab5.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab5PageRoutingModule } from './tab5-routing.module';
import { ReferalsComponent } from "../pages/referals/referals.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab5PageRoutingModule,
    ReferalsComponent
],
  declarations: [Tab5Component]
})
export class Tab5PageModule {}
