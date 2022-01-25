import {Component, OnInit} from '@angular/core';
import {Customer} from "../Customer";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  isDisable!: boolean;
  employee!: FormGroup;

  checkBox1 = new FormControl(true);
  checkBox2 = new FormControl(true);
  error = new FormControl();

  customers: Customer[] = [
    {customerNo: 1, name: 'Truong Van Hieu', address: 'Tp.HCM', city: 'Tp.HCM', country: 'Viet Nam', state: 'Mien Nam'},
    {
      customerNo: 2,
      name: 'Truong Van Hieu 1',
      address: 'Tp.Ha Noi',
      city: 'Tp.Ha Noi',
      country: 'Viet Nam',
      state: 'Mien Bac'
    },
    {
      customerNo: 3,
      name: 'Truong Van Hieu 2',
      address: 'Tp.Da Nang',
      city: 'Tp.Da Nang',
      country: 'Viet Nam',
      state: 'Mien Trung'
    },
    {
      customerNo: 4,
      name: 'Truong Van Hieu 3',
      address: 'Tp.Hue',
      city: 'Tp.Hue',
      country: 'Viet Nam',
      state: 'Mien Trung'
    },
  ];


  constructor() {
  }

  ngOnInit(): void {
    this.employee = new FormGroup({
      id: new FormControl(),
      empName: new FormControl(),
      empGenMale: new FormControl(true),
      empGenFemale: new FormControl(true),
      error: new FormControl(),
    })
  }

  public onChangeBox(e: any) {
    if (!e.target.checked) {
      if (this.employee.get('empGenMale')?.value == false && this.employee.get('empGenFemale')?.value == false) {
        this.employee.get('error')?.setValue('Please select at least one Gen')
        this.isDisable = true
      }
    } else {
      this.employee.get('error')?.setValue(null)
      this.isDisable = false
    }
  }

  public onSubmit() {
    console.log(this.employee.value)
  }

}
