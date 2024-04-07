import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { BoldDirective } from '../../core/directives/bold.directive';
import { table } from 'console';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BoldDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  coursive_text;
  constructor(private dataservice: DataService) {
    console.log(this.dataservice.getData("assets/data.json"));
    this.coursive_text = this.dataservice.getData("assets/data.json");
    // console.log(this.coursive_text[0]);
  }
}
