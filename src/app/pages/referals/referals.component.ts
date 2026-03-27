import { Component, OnInit } from '@angular/core';
import { IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButton, 
  IonIcon,
  IonFooter,
  IonTabBar,
  IonTabButton,
  IonLabel } from '@ionic/angular/standalone';
  
@Component({
  selector: 'app-referals',
  templateUrl: './referals.component.html',
  styleUrls: ['./referals.component.scss'],
     standalone: true,
  imports : []
})
export class ReferalsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
