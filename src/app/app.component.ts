import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})

export class AppComponent {
  constructor() {}

  async initializeApp() {
  // Logic here (e.g., check login status)
  await SplashScreen.hide(); 
}
  
}
