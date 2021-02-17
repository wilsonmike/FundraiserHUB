import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr


@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})

export class AddStoryComponent implements OnInit {
  public storyForm: FormGroup;  // Define FormGroup to student's form
  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.crudApi.GetStoriesList();  // Call GetStudentsList() before main form is being called
    this.storiForm();              // Call student form when component is ready
  }

  // Reactive student form
  // tslint:disable-next-line:typedef
  storiForm() {
    this.storyForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  // Accessing form control using getters
  // tslint:disable-next-line:typedef
  get firstName() {
    return this.storyForm.get('firstName');
  }

  // tslint:disable-next-line:typedef
  get lastName() {
    return this.storyForm.get('lastName');
  }

  // tslint:disable-next-line:typedef
  get email() {
    return this.storyForm.get('email');
  }

  // tslint:disable-next-line:typedef
  get mobileNumber() {
    return this.storyForm.get('mobileNumber');
  }

  // Reset student form's values
  // tslint:disable-next-line:typedef
  ResetForm() {
    this.storyForm.reset();
  }
  // tslint:disable-next-line:typedef
  submitStoryData() {
    this.crudApi.AddStories(this.storyForm.value); // Submit student data using CRUD API
    // tslint:disable:max-line-length
    // tslint:disable-next-line:no-string-literal
    this.toastr.success(this.storyForm.controls['firstName'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.ResetForm();  // Reset form when clicked on reset button
   }
}
