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
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
  standalone: true,
  imports : [
    IonContent
  ]
})
export class WalletComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
