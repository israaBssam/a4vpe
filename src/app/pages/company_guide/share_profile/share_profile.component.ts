import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-company_guide_share_profile',
  templateUrl: './share_profile.component.html'
})
export class ShareProfileComponent  implements OnInit {
  
  public id = 0;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void { 
    this.id = this.route.snapshot.params['id'];
  }

  


}
