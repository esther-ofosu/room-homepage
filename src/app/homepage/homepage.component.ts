import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { SideComponent } from '../side/side.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ NavComponent,SideComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
