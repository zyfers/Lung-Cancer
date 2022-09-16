import { Component } from '@angular/core';
import {WebRequestService} from "./web-request.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lung-cancer-prediction';
  param1 = '';
  param2 = '';
  param3 = '';
  param4 = '';
  param5 = '';
  dying = true;
  safe = true;

  constructor(private service: WebRequestService) {
  }

  getResult(param1: any, param2: any, param3: any, param4: any, param5: any) {
    this.safe = true;
    this.dying = true;
    console.log(param1);
    console.log(param2);
    console.log(param3);
    console.log(param4);
    console.log(param5);
    const payload = {
      param1,
      param2,
      param3,
      param4,
      param5
    };
    this.service.post(payload).subscribe((response) => {
      if (response['confidence'] === 1)
        this.dying = false;
      else
        this.safe = false;
    });
  }
}
