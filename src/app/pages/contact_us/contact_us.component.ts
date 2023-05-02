import { Component, OnInit,ViewChild} from '@angular/core';
import { ContactUsService } from './contact_us.service';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-contact_us',
  templateUrl: './contact_us.component.html',
  styleUrls: ['./contact_us.component.css']
})
export class ContactUsComponent {
  public details:any={contact_information:''};

   public center;

   display: any;
    
    zoom = 4;
    @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
    markerPositions: google.maps.LatLngLiteral[] = [];
    openInfoWindow(marker: MapMarker) {
        if (this.infoWindow != undefined) this.infoWindow.open(marker);
    }
  public item:any= {first_name: '',last_name: '',email: '',message: ''};

  constructor(private contact_us: ContactUsService,private  messageService: MessageService) {}
  ngOnInit() {
      this.contact_us.getAll().subscribe({next: (data) => {
          this.details = data;
      }
    });
  }

  onSubmit(): void {
    var myFormData = new FormData();
    for (const [key, value] of Object.entries(this.item)) {
        myFormData.append(key+'', value+'');
    }
      
    this.contact_us.create(myFormData).subscribe((data) => {
      this.item = {first_name: '',last_name: '',email: '',message: ''};
      this.messageService.add({severity:'success', summary:"",detail: data.message+""});
    },
    error => {
      if (error.status === 422) {
          var array = error.error.errors;
          Object.keys(array).forEach((key, index) => {
            for (const value of Object.values(array[key])) {
               this.messageService.add({severity:'error', summary:key+"", detail:value+""});
            }
          });
      }
    });

  }
}
