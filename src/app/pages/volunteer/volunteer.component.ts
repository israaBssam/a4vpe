import { Component, OnInit,ViewChild} from '@angular/core';
import { VolunteerService } from './volunteer.service';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent {
  public details:any={contact_information:''};

  public item:any= {first_name: '',last_name: '',email: '',message: ''};

  constructor(private volunteer: VolunteerService,private  messageService: MessageService) {}
  ngOnInit() {
      this.volunteer.getAll().subscribe({next: (data) => {
          this.details = data;
      }
    });
  }

}
