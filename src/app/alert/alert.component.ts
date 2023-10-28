import {Component} from "@angular/core";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styles: [`
    p {
      margin: 1px;
      padding: 20px;
      border: 1px darkred;
      background-color: red;
      text-decoration-color: red;
    }
  `]

})
export class AlertComponent {
}
