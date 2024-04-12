import { Block } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  ngOnInit(): void {
    const mediaQuery = "(max-width: 768px)";
    const mediaQueryList = window.matchMedia(mediaQuery);
    
    mediaQueryList.addEventListener("change", (event) => {
      // This function will be called whenever the viewport size changes
      if (event.matches) {
        // this.toggleIconClose()
        // this.toggleMobileMenu()
        console.log("Viewport is now less than 768px wide");
      } 
    });
  }
  

  toggleIconClose() {
    const mobileMenu= document.getElementById('mobileMenu') as HTMLDivElement
    mobileMenu.style.display = 'block';

    const closeMenuDiv = document.getElementById('closeMenuDiv') as HTMLDivElement
    closeMenuDiv.style.display = 'none';

    const transBackg = document.getElementById('transBackg') as HTMLDivElement
    transBackg.style.display = 'none'
    console.log('mobile menu display in block')
  }

  
  toggleMobileMenu() {
    const closeMenuDiv = document.getElementById('closeMenuDiv') as HTMLDivElement
    closeMenuDiv.style.display = 'block';
    closeMenuDiv.style.backgroundColor = 'white'

    const mobileMenu= document.getElementById('mobileMenu') as HTMLDivElement
    mobileMenu.style.display = 'none';

    const closeIcon = document.getElementById('close-img') as HTMLDivElement
    closeIcon.style.display = 'block';

    const transBackg = document.getElementById('transBackg') as HTMLDivElement
    transBackg.style.display = 'block';

  }
}
