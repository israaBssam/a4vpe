import { Component, OnInit} from '@angular/core';
import { ForOurPartnerService } from './for_our_partner.service';

@Component({
  selector: 'app-for_our_partner',
  templateUrl: './for_our_partner.component.html',
  styleUrls: ['./for_our_partner.component.css']
})
export class ForOurPartnerComponent {

  public details:any= {first_name: '',last_name: '',email: '',message: ''};

  constructor(private for_our_partner: ForOurPartnerService) {}
  ngOnInit() {
      this.for_our_partner.getAll().subscribe({next: (data) => {
          this.details = data;
      }
    });
  }

}
