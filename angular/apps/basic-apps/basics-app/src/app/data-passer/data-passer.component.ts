import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-data-passer",
  templateUrl: "./data-passer.component.html",
  styleUrls: ["./data-passer.component.css"]
})
export class DataPasserComponent implements OnInit {
  @Input() information: { name: string; age: string; gender: string };

  constructor() {}

  ngOnInit() {}
}
