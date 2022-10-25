import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ContactComponent);

      component = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should have as text 'Contact Page'`, async(() => {
    expect(component.title).toEqual('Contact Page');
  }));

  it(`should test submitted true`, async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it(`should call the onSubmitt method`, async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it(`form should be invalid`, async(() => {
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.contactForm.controls['email'].setValue('priyank@gmail.com');
    component.contactForm.controls['name'].setValue('priyank');
    component.contactForm.controls['text'].setValue('text');
    expect(component.contactForm.valid).toBeTruthy();
  }));
});
