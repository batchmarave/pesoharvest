import { Component, OnInit } from '@angular/core';   
import { CommonModule } from '@angular/common'; 
import { IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonRow,
  IonCol,
  IonGrid,
  IonButton, 
  IonIcon,
  IonFooter,
  IonTabBar,
  IonTabButton,
  IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports : [
    CommonModule, 
    IonCol,
    IonRow,
    IonContent,
    IonGrid
  ]
})
export class ProductsComponent  implements OnInit {

  products = [
    { name: 'Corn Seeds', image: 'assets/images/corn.png' },
    { name: 'Animal Feeds', image: 'assets/images/feeds.png' },
    { name: 'Soybean Plants', image: 'assets/images/soybeans.png' },
    { name: 'Agarwood Farming', image: 'assets/images/agarwood.png' }
  ];
  constructor() { }

  
  ngOnInit() {}

}
