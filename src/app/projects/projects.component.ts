import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {SelectionModel} from '@angular/cdk/collections';

 
export interface PeriodicElement {
  position: number;
  PROJECT_ID: number;
  PROJECT_NAME: string;
  CREATED_ON:string;
  PROJECT_HEAD: string;
  PO_IN_PROCESS:number;
  STATUS:string;
  ACTION:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
   { position: 1,PROJECT_ID: 1,PROJECT_NAME: 'Vendor Portal',CREATED_ON:'25/05/2021',PROJECT_HEAD:'manoj',PO_IN_PROCESS: 5 ,STATUS:'Active',ACTION:'button'},
   { position: 2,PROJECT_ID: 3,PROJECT_NAME: 'Vendor Portal',CREATED_ON:'27/05/2021',PROJECT_HEAD:'manoj',PO_IN_PROCESS: 5 ,STATUS:'Active',ACTION:'button'},
   { position: 3,PROJECT_ID: 3,PROJECT_NAME: 'Vendor Portal',CREATED_ON:'27/05/2021',PROJECT_HEAD:'manoj',PO_IN_PROCESS: 5 ,STATUS:'Active',ACTION:'button'},
   { position: 4,PROJECT_ID: 3,PROJECT_NAME: 'Vendor Portal',CREATED_ON:'27/05/2021',PROJECT_HEAD:'manoj',PO_IN_PROCESS: 5 ,STATUS:'Active',ACTION:'button'},
   { position: 5,PROJECT_ID: 3,PROJECT_NAME: 'Vendor Portal',CREATED_ON:'27/05/2021',PROJECT_HEAD:'manoj',PO_IN_PROCESS: 5 ,STATUS:'Active',ACTION:'button'},
   { position: 6,PROJECT_ID: 3,PROJECT_NAME: 'Vendor Portal',CREATED_ON:'27/05/2021',PROJECT_HEAD:'manoj',PO_IN_PROCESS: 5 ,STATUS:'Active',ACTION:'button'},
   { position: 7,PROJECT_ID: 3,PROJECT_NAME: 'Vendor Portal',CREATED_ON:'27/05/2021',PROJECT_HEAD:'manoj',PO_IN_PROCESS: 5 ,STATUS:'Active',ACTION:'button'},
   { position: 8,PROJECT_ID: 3,PROJECT_NAME: 'Vendor Portal',CREATED_ON:'27/05/2021',PROJECT_HEAD:'manoj',PO_IN_PROCESS: 5 ,STATUS:'Active',ACTION:'button'},
   { position: 9,PROJECT_ID: 3,PROJECT_NAME: 'Vendor Portal',CREATED_ON:'27/05/2021',PROJECT_HEAD:'manoj',PO_IN_PROCESS: 5 ,STATUS:'Active',ACTION:'button'},
   { position: 10,PROJECT_ID: 3,PROJECT_NAME: 'Vendor Portal',CREATED_ON:'27/05/2021',PROJECT_HEAD:'manoj',PO_IN_PROCESS: 5 ,STATUS:'Active',ACTION:'button'},
   { position: 11,PROJECT_ID: 3,PROJECT_NAME: 'Vendor Portal',CREATED_ON:'27/05/2021',PROJECT_HEAD:'manoj',PO_IN_PROCESS: 5 ,STATUS:'Active',ACTION:'button'},

   {position: 12, PROJECT_ID: 2,PROJECT_NAME: 'E-commerce Application',CREATED_ON:'26/05/2021',PROJECT_HEAD:'manoj',PO_IN_PROCESS: 5 ,STATUS:'Active',ACTION:'button'},
   { position: 13,PROJECT_ID: 4,PROJECT_NAME: 'Vendor Portal',CREATED_ON:'28/05/2021',PROJECT_HEAD:'manoj',PO_IN_PROCESS: 5 ,STATUS:'Active',ACTION:'button'}
 
];



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements  OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
constructor(private breakpointObserver: BreakpointObserver ) {}
  
@ViewChild(MatSort) sort!:MatSort;
@ViewChild(MatPaginator) 
paginator!:MatPaginator 

 
displayedColumns: string[] = ['select', 'PROJECT_ID', 'PROJECT_NAME', 'CREATED_ON', 'PROJECT_HEAD','PO_IN_PROCESS','STATUS','ACTION'];
displayedColumnsData: string[] = ['PROJECT_ID', 'PROJECT_NAME', 'CREATED_ON', 'PROJECT_HEAD','PO_IN_PROCESS','STATUS','ACTION'];
dataSource = new MatTableDataSource<PeriodicElement>( ELEMENT_DATA) ;
selection = new SelectionModel<PeriodicElement>(true, []);

  ngOnInit(): void {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
   
  }


/** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  if (this.isAllSelected()) {
    this.selection.clear();
    return;
  }

  this.selection.select(...this.dataSource.data);
}

/** The label for the checkbox on the passed row */
checkboxLabel(row?: PeriodicElement): string {
  if (!row) {
    return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
}

  applyFilter(filterValue:string) { 
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}


