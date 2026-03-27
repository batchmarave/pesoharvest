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
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
  standalone: true,
  imports : [
    IonButton,
    IonContent
  ]
})
export class MembershipComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
