import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-form-submitter",
  templateUrl: "./form-submitter.component.html",
  styleUrls: ["./form-submitter.component.css"]
})
export class FormSubmitterComponent implements OnInit {
  @Output() newInfo = new EventEmitter<{name: string, age: string, gender: string}>();
  name= "";
  age= "";
  gender= "";

  ngOnInit() {}

  addInfo() {
    this.newInfo.emit({name: this.name, age: this.age, gender: this.gender});
  }
}
