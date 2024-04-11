import { Block } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  toggleIconClose() {
    const mobileMenu= document.getElementById('mobileMenu') as HTMLDivElement
    mobileMenu.style.display = 'block';
    const closeMenuDiv = document.getElementById('closeMenuDiv') as HTMLDivElement
    closeMenuDiv.style.display = 'none';

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
