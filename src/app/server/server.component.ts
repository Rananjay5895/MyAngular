import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-server',
    templateUrl: '/server.component.html',
    styleUrls: ['/server.component.css']
  }
)
export class ServerComponent implements OnInit {
  value: number;
  allowNewServer: Boolean = false;
  serverId: number;
  serverName: string = "MyServer";

  serverForm = new FormGroup({
    serverName: new FormControl('', Validators.required),
    serverId: new FormControl('', Validators.required)
  });

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
    this.setValue();
  }

  private setValue() {
    this.value = 10;
  }

  disableServerAddition() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 5000)
  }

  onUpdateServerName(event: Event) {
    this.serverName = this.serverForm.controls?.serverName.toString();
    console.log(this.serverName);
  }

  onChange(event: Event) {
    this.allowNewServer = true;
  }

  onUpdateServerId(event: Event) {
    console.log(this.serverId);
  }
}
