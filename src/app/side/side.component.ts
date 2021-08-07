import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    cards =  [ {title:'Total Vendors',value:'150',image:'../../assets/Total Vender.png'},{title:'Live Contracts',value:'80',image:'../../assets/Live Contracts.png'},{title:'Released PO',value:'20',image:'../../assets/Released PO.png'},{title:'New Vendors ',value:'07',image:'../../assets/New Vender.png'}]
    card =[{title:'Pending Invoice Approvals',value:'60',height:'10ch'},{title:'Due Payments',value:'70'},{title:'RFQ Published',value:'00'}]

  
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
   
  }
  

}
