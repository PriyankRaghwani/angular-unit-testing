import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  title = '';
  contactForm: FormGroup;
  contact = {
    name: '',
    email:'',
    text: ''
  }
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      text: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.title = 'Contact Page';
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.contactForm.get('name')?.value);
    console.log(this.contactForm.get('email')?.value);
    console.log(this.contactForm.get('text')?.value);
  }

}
