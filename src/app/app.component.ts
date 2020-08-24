import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'constraints': new FormArray([
        new FormGroup({
          "id": new FormControl(1, [Validators.required]),
          "before": new FormControl([1, 2, 3], [Validators.required]),
          "after": new FormControl([1], [Validators.required]),
          "delay": new FormControl(null, [Validators.required]),
        }),

        new FormGroup({
          "id": new FormControl(2, [Validators.required]),
          "before": new FormControl([], [Validators.required]),
          "after": new FormControl([], [Validators.required]),
          "delay": new FormControl(null, [Validators.required]),
        })
      ])
    })
  }

  submit() {
    console.log(this.form.value);
  }

}