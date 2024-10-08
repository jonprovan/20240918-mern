import { Component, EventEmitter, Output } from '@angular/core';
import { Salesperson } from '../models/salesperson';
// this imports are all required for the reactive form to function; notes on each below
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule], // must import this here for reactive forms to work
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  // this event emitter sends our creation event up to the Salespeople parent component
  @Output() createSalespersonEvent = new EventEmitter<Salesperson>();

  // a FormGroup is a group of FormControls, each of which manages one HTML form input (e.g., a text field)
  // this FormGroup is initialized in the constructor below
  // each form in your HTML would have a separate FormGroup
  // so, for instance, you could practice by creating a separate FormGroup for updating Salespeople
  createForm: FormGroup;
  
  constructor() {
    this.createForm = new FormGroup({

      // each of these is a form control
      // the name on the left is up to you and doesn't have to match object properties, etc.
      // here, we're modeling properties of a Salesperson we'll eventually create
      // the first parameter of each FormControl is its initial value
      // the second is an array containing one or more Validators
      // a Validator checks the current value of the control and assesses whether or not its requirement is met
      // for createFirstName, we're checking that the value is not an empty string
      // and that it's not longer than 32 characters
      // if one or more Validators are violated, the FormControl will register an error
      // we'll use these errors in our HTML to conditionally display messages for the user
      // there are a number of stock Validators; you can also create your own
      createFirstName: new FormControl('', [ Validators.required, Validators.maxLength(32) ]),
      createLastName: new FormControl('', [ Validators.required, Validators.maxLength(32) ]), // same Validators here
      createDepartment: new FormControl('', [ Validators.required, Validators.maxLength(32) ]), // and here
      createHireDate: new FormControl('', [ Validators.required, Validators.maxLength(10) ]), // and here
      // createSalary uses a regex pattern matcher making it so the user can't enter negative or decimal number
      // it must also have a value, though with numbers, 0 is okay
      // and it can't be higher than 1,000,000
      createSalary: new FormControl(0, [ Validators.required, Validators.max(1000000), Validators.pattern('[0-9]*') ]),
    })
  }

  // these getters return the FormControls themselves (not the values)
  // this makes it easier to check for errors in the HTML
  // see the submitCreateForm() method for how to get the values
  get createFirstName() {
    return this.createForm.get('createFirstName');
  }

  get createLastName() {
    return this.createForm.get('createLastName');
  }

  get createDepartment() {
    return this.createForm.get('createDepartment');
  }

  get createHireDate() {
    return this.createForm.get('createHireDate');
  }

  get createSalary() {
    return this.createForm.get('createSalary');
  }

  // this method clears the form by just calling the reset method on the FormGroup
  // you can run it via button click; it also runs whenever you submit the form
  resetCreateForm() {
    this.createForm.reset();
  }

  // this method emits the assembled Salesperson to the parent Salespeople component
  // note that we're accessing the values using our getters and the FormControls' .value property
  // the FormControls may not exist, so we need the optional chaining operator
  submitCreateForm() {
    this.createSalespersonEvent.emit(new Salesperson(0,
                                                     this.createFirstName?.value,
                                                     this.createLastName?.value,
                                                     this.createDepartment?.value,
                                                     this.createHireDate?.value,
                                                     this.createSalary?.value));
    // after emitting the event, we clear the form
    this.resetCreateForm();
  }

}
