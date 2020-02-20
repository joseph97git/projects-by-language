import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data = [
    { name: "Joseph", age: "23", gender: "male" },
    { name: "Bob", age: "3", gender: "male" },
    { name: "Judy", age: "78", gender: "female" }
  ];

  onAddNewInfo(info: {name: string, age: string, gender: string}) {
    this.data.push(info);
  }
}
