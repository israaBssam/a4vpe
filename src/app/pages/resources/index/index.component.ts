import { Component, OnInit} from '@angular/core';
import { AboutUsService } from '../about_us.service';
import { environment } from 'src/environments/environment';
import { AboutUs } from '../about_us.model';

@Component({
  selector: 'app-about_us',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']

})
export class AboutUsComponent  implements OnInit {

  details :any={ about_us_home:'',about_us_our_vision:'',co_founders_data:'' };
  type: any = 'index';
  

  constructor(private about_us: AboutUsService) {}

  ngOnInit(): void {
    this.about_us.get(this.type).subscribe({next: (data) => {
        this.details = data;
    }});
  }

  changeType(type: any) {

    this.type = type;

  }

}
