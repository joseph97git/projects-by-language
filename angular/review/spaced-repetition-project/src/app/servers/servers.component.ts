import { Component, OnInit } from "@angular/core";

@Component({
  selector: "[app-servers]",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  status: boolean = false;
  message: string = "Type a message...";
  name: string = "wait for it...";
  dynamicMessage: string = "change me!";

  constructor() {
    setTimeout(() => {
      this.name = "Joe";
    }, 3000);
  }

  ngOnInit() {}

  switchStatus() {
    this.status = !this.status;
  }

  updateName(event: any) {
    this.message = (<HTMLInputElement>event.target).value;
  }
}
