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
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
    standalone: true,
  imports : [
    IonContent,
    IonButton,
    IonIcon,
    IonFooter,
    IonTabBar,
    IonTabButton,
    IonLabel
]
})
export class LandingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
