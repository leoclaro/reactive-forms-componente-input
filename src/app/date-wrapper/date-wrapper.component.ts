import { Component, Input, SkipSelf, OnInit, ViewChild } from "@angular/core";
import { NgbInputDatepicker } from "@ng-bootstrap/ng-bootstrap";
import { ControlContainer, FormGroupDirective } from "@angular/forms";

@Component({
  selector: "app-date",
  templateUrl: "./date-wrapper.component.html",
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]]
    }
  ]
})
export class DateWrapperComponent implements OnInit {
  @Input() controlName: string;

  @ViewChild(NgbInputDatepicker)
  calendar: NgbInputDatepicker;

  constructor() {}

  ngOnInit() {}
}
