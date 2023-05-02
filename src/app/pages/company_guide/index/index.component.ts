import { Component, OnInit} from '@angular/core';
import { CompanyGuideService } from '../company_guide.service';
import { environment } from 'src/environments/environment';
import { CompanyGuide } from '../company_guide.model';

@Component({
  selector: 'app-company_guide',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']

})
export class CompanyGuideComponent  implements OnInit {

  rows = environment.table_rows;
  details: CompanyGuide[] = [];
  cols: any[] = [];
  totalRecords: number =0;
  first: number=0;
  last: number=0;
  current_page: number=1;
  public socialLinks:any=[];
  public text_search ;
  showMore:boolean=true;

  constructor(private company_guide: CompanyGuideService) {}

  ngOnInit(): void {
    this.company_guide.getOptions().subscribe({next: (data) => {
        this.socialLinks = data.socialLinks;
    }});
    this.company_guide.getAll({params:{page:this.current_page,perPage:this.rows}}).subscribe({next: (data) => {
          this.details = data.data;
          this.totalRecords =  data.total;
          this.first = data.from;
          this.last = data.to;
          this.rows = data.per_page;
          this.current_page = data.current_page;
          if(data.current_page == data.last_page)
            this.showMore = false;
          else
            this.showMore = true;
        }
    });
  }

  Search(page): void {
    if(this.text_search == undefined)
      this.text_search ='';
    
    this.company_guide.getAll({params:{page:page,perPage:this.rows,text_search:this.text_search}}).subscribe({next: (data) => {
          if(page == 1)
            this.details = data.data;
          else
            this.details.push(...data.data)

          this.totalRecords =  data.total;
          this.first = data.from;
          this.last = data.to;
          this.rows = data.per_page;
          this.current_page = data.current_page;
          if(data.current_page == data.last_page)
            this.showMore = false;
          else
            this.showMore = true;


        }
    });
  }

}
