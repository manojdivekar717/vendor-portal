import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapacityComponent } from './capacity/capacity.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContractsComponent } from './contracts/contracts.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PoliciesComponent } from './policies/policies.component';
import { ProjectsComponent } from './projects/projects.component';
import { PublishComponent } from './publish/publish.component';
 
import { SideComponent } from './side/side.component';
import { VendorComponent } from './vendor/vendor.component';


const routes: Routes = [
         
  { path: '', redirectTo: '/side', pathMatch: 'full' },
    {path:'side',component:SideComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'capacity',component:CapacityComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'contracts',component:ContractsComponent},
    {path:'insurance',component:InsuranceComponent},
    {path:'invoices',component:InvoicesComponent},
    {path:'policies',component:PoliciesComponent},
    {path:'publish',component:PublishComponent},
    {path:'vendors',component:VendorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
