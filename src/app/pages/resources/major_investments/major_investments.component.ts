import { Component, OnInit,ViewChild} from '@angular/core';
import { ResourcesService } from '../resources.service';
import { ActivatedRoute } from "@angular/router";
import { environment } from 'src/environments/environment';
import { Resources } from '../resources.model';

@Component({
  selector: 'app-director',
  templateUrl: './major_investments.component.html',
  styleUrls: ['./major_investments.component.css']

})
export class MajorInvestmentComponent  implements OnInit {
  
  // rows = environment.table_rows;
  investments: any[] = [];
  banks: any[] = [];
  organizations: any[] = [];
  description: any;
  economic_reports: any[]=[];
  efforts: any[] = [];
  videos: any[] = [];
  buy_palestinians: any[] = [];

  // totalRecords: number =0;
  // first: number=0;
  // last: number=0;
  // current_page: number=1;
  // showMore:boolean=true;
  type: any = 'major_investments';

  
  constructor(private resources: ResourcesService,private route: ActivatedRoute) {}

  ngOnInit(): void { 
    
    this.changeType(this.type);

  }

  changeType(type: any) {

    this.type = type;
    this.resources.MajorInvestments({type:type}).subscribe({next: (data) => {
          if(type == 'major_investments'){
            this.investments = data.investments;
            this.banks = data.banks;
            this.description = data.description.description;
          }else if(type == 'economic_reports')
            this.economic_reports = data.economic_reports;
          else if(type == 'palestine_trade_association'){
            this.organizations = data.organizations;
            this.description = data.description.description;
          }else if(type == 'efforts'){
            this.efforts = data.efforts;
            this.videos = data.videos;
            this.description = data.description.description;
          }else if(type == 'buy_palestinian'){
            this.buy_palestinians = data.buy_palestinians;
          }
        }
    });

  }
  
}
