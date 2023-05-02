import { Component, OnInit,ViewChild} from '@angular/core';
import { DonateService } from './donate.service';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {
  // public donate_form:any={hero_description:'',hero_title:'',page_description:''};
  details :any={ donate_form:'' };

  constructor(private donate: DonateService,private  messageService: MessageService) {}
  ngOnInit() {
      this.donate.getAll().subscribe({next: (data) => {
          this.details = data;
          console.log(this.details.donate_form);

      }
    });
  }

  
}
