import { Component, OnInit,ViewChild} from '@angular/core';
import { AboutUsService } from '../about_us.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-director',
  templateUrl: './director_details.component.html',
  styleUrls: ['./director_details.component.css']

})
export class DirectorComponent  implements OnInit {
  
  public id = 0;
  public socialLinks;
  public item:any= {
    name: '',
    description: '',
    employment: '',
    image: '',
    social_links: {},
  };

  
  constructor(private about_us: AboutUsService,private route: ActivatedRoute) {}

  ngOnInit(): void { 

    this.id = this.route.snapshot.params['id'];
    this.about_us.getDirector(this.id).subscribe({next: (data) => {
        this.item = data.item;
        this.socialLinks = data.socialLinks;
    }});

  }


}
