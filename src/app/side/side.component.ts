import { Component} from '@angular/core';

@Component({
  selector: 'app-side',
  standalone: true,
  imports: [],
  templateUrl: './side.component.html',
  styleUrl: './side.component.css'
})
export class SideComponent {
  desktopUrls: string[] = [  
    '/assets/images/desktop-image-hero-1.jpg',
    '/assets/images/desktop-image-hero-2.jpg',
    '/assets/images/desktop-image-hero-3.jpg',
  ];

  mobileUrls: string[] = [
    '/assets/images/mobile-image-hero-1.jpg',
    '/assets/images/mobile-image-hero-2.jpg',
    '/assets/images/mobile-image-hero-3.jpg',
  ];

  currentImageIndex = 0;  

  forward() {
    const backgImages= document.getElementById('backg') as HTMLDivElement
    this.currentImageIndex++; 
    console.log("picture changed successfully")
    if (this.currentImageIndex >= this.desktopUrls.length) {
      this.currentImageIndex = 0;  
    }
    console.log("picture changed successfully2")

    const screenSize= window.matchMedia('(max-width:768px)')
    if ('max-width:768px'){
      backgImages.style.backgroundImage = `url(${this.mobileUrls[this.currentImageIndex]})`
    }

    else{
      backgImages.style.backgroundImage = `url(${this.desktopUrls[this.currentImageIndex]})`
    }

  }

  backward() {
    const backgImages= document.getElementById('backg') as HTMLDivElement
    this.currentImageIndex--;
    console.log("backward triggered")
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.desktopUrls.length - 1; 
    }

    const screenSize= window.matchMedia('(max-width:768px)')
    if ('max-width:768px'){
      backgImages.style.backgroundImage = `url(${this.mobileUrls[this.currentImageIndex]})`
    }

    else{
      backgImages.style.backgroundImage = `url(${this.desktopUrls[this.currentImageIndex]})`
    }

  }

  getCurrentImageUrl(): string {
    return this.desktopUrls[this.currentImageIndex];  // Get the URL of the current image
  }
}


