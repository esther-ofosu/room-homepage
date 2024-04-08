import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HomeComponent } from '../home/home.component';
import { SideComponent } from '../side/side.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ NavComponent, HomeComponent, SideComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
