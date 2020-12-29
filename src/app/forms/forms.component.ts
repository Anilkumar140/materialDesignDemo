import { Component, OnInit } from '@angular/core';
import { AfterViewInit,ViewChild } from '@angular/core';  
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';  
import { Observable, Observer } from 'rxjs';
import {  FormControl } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


export interface ExampleTab {
  label: string;
  content: string;
}
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  slides = [{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}];

  asyncTabs: Observable<ExampleTab[]>;
  public model = {};
  public submitted: boolean = false;

  public chartType: string = 'line';
  regiForm: FormGroup;  
  FirstName:string='';  
  LastName:string='';  
  Address:string='';  
  DOB:Date=null;  
  Gender:string='';  
  Blog:string='';  
  Email:string='';  
  IsAccepted:number=0;  
  isShown: boolean = false;
  isShown1: boolean = false;
  searchdata:string;
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  officePinList: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private fb: FormBuilder,
    private formBuilder: FormBuilder){
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Reactive Form', content: 'Content 1'},
          {label: 'Template Driven Form', content: 'Content 1'},
        
        ]);
      }, 1000);
    });
  
  
  
  }  
  
  onChange(event:any)  
  {  
    if (event.checked == true) {  
      this.IsAccepted = 1;  
    } else {  
      this.IsAccepted = 0;  
    }  
  }  

  // onFormSubmit(form:NgForm)  
  // {  
  //   console.log(form);  
  // }  
  onSubmit(f) {
    console.log(f.value);
}


ngOnInit(){

  this.regiForm = this.fb.group({  
    'FirstName' : [null, Validators.required],  
    'LastName' : [null, Validators.required],  
    'Address' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],  
    'DOB' : [null, Validators.required],  
    'Gender':[null, Validators.required],  
    'Blog':[null, Validators.required],  
    'Email':[null, Validators.compose([Validators.required,Validators.email])],  
    'IsAccepted':[null]  
  });  
}
public getSubmittedEmployeeInfo () {
  return JSON.stringify(this.model);
}

public submit(employeeDetailsForm) {
  if (employeeDetailsForm.valid) {
     this.submitted = true;
  } else {
    for (const i in employeeDetailsForm.controls) {
          if (employeeDetailsForm.controls[i]) {
              employeeDetailsForm.controls[i].markAsTouched();
          }
      }
  }
}

onFormSubmit(userForm: NgForm) {
  console.log(userForm.value);
  console.log('Name:' + userForm.controls['name'].value);
  if( userForm.controls['name'].value==null ||  userForm.controls['cost'].value==null ||  userForm.controls['comments'].value==null){
    this.isShown1=true;
  }
  else 
  {
    this.isShown1=false;
  }
  
} 
printdata(){
  console.log(this.searchdata);
}
applyFilter(filterValue: string) {
  this.officePinList.filter = filterValue.trim().toLowerCase();
}


    
}  
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];