import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  // addressForm = this.fb.group({
  //   Organization: null,
  //   ContactNo: null,
  //   Email: [null, Validators.required],
  //   state: [null, Validators.required],
  //   city: [null, Validators.required],
  //   address: [null, Validators.required],
  //   ZipCode: null ,
  //   VendorCategory: [null, Validators.required],
  //   Status: [null, Validators.required],
  //   Password: [null, Validators.required]     
  // });
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });



  states = [
    {name: 'Andhra Pradesh', abbreviation: 'AP'},
    {name: 'Assam', abbreviation: 'AS'},
    {name: 'Arunachal Pradesh', abbreviation: 'AP'},
    {name: 'Bihar', abbreviation: 'BI'},
    {name: 'Chhattisgarh', abbreviation: 'CH'},
    {name: 'Goa', abbreviation: 'GO'},
    {name: 'Gujarat', abbreviation: 'GU'},
    {name: 'Haryana', abbreviation: 'HA'},
    {name: 'Himachal Pradesh', abbreviation: 'HP'},
    {name: 'Jharkhand', abbreviation: 'JH'},
    {name: 'Karnataka', abbreviation: 'KA'},
    {name: 'Kerala', abbreviation: 'KE'},
    {name: 'Madhya Pradesh', abbreviation: 'MP'},
    {name: 'Maharashtra', abbreviation: 'MH'},
    {name: 'Manipur', abbreviation: 'MA'},
    {name: 'Meghalaya', abbreviation: 'ME'},
    {name: 'Mizoram', abbreviation: 'MI'},
    {name: 'Nagaland', abbreviation: 'NA'},
    {name: 'Odisha', abbreviation: 'OD'},
    {name: 'Punjab', abbreviation: 'PN'},
    {name: 'Rajasthan', abbreviation: 'RJ'},
    {name: 'Sikkim', abbreviation: 'SK'},
    {name: 'Tamil Nadu', abbreviation: 'TN'},
    {name: 'Telangana', abbreviation: 'TE'},
    {name: 'Tripura', abbreviation: 'TR'},
    {name: 'Uttarakhand', abbreviation: 'UK'},
    {name: 'Uttar Pradesh', abbreviation: 'UP'},
    {name: 'West Bengal', abbreviation: 'WB'},
    {name: 'Andaman and Nicobar Islands', abbreviation: 'AI'},
    {name: 'Chandigarh', abbreviation: 'CH'},
    {name: 'Dadra and Nagar Haveli and Daman and Diu', abbreviation: 'DD'},
    {name: 'National Capital Territory of Delhi', abbreviation: 'DE'},
    {name: 'Jammu and Kashmir', abbreviation: 'JK'},
    {name: 'Lakshadweep', abbreviation: 'LK'},
    {name: 'Ladakh', abbreviation: 'LD'},
    {name: 'Puducherry', abbreviation: 'PD'},
   
  ];
 

    hasUnitNumber = false;
  
    

  constructor(private breakpointObserver: BreakpointObserver,private fb: FormBuilder) {}

  onSubmit(): void {

      Swal.fire('Successfully Saved vendor!', '', 'success')
  
  }
}
