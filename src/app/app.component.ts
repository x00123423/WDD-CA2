import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router) { }

  navigate() {
        this.router.navigate(["home"])
        this.router.navigate(["part-a"]),
        this.router.navigate(["part-b"]);
    }

}
