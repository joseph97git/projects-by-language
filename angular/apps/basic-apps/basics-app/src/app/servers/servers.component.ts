import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  status: boolean = false;
  message: string = "Type a message...";
  name: string = "wait for it...";
  dynamicMessage: string = "change me!";
  displayInfo: boolean = false;
  running: string = "online";
  servers = ["Server 1", "Server 2", "Server 3"];

  constructor() {
    setTimeout(() => {
      this.name = "Joe";
    }, 3000);
  }

  ngOnInit() {}

  switchStatus() {
    this.status = !this.status;
  }

  switchDisplayInfo() {
    this.displayInfo = !this.displayInfo;
  }

  shutdownRunning() {
    this.running = Math.random() > 0.5 ? "online" : "offline";
  }

  updateName(event: any) {
    this.message = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.running === "online" ? "green" : "red";
  }
}
