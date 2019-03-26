import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    public users: any = [];

    constructor(
        private http: HttpClient
    ) { }

    ngOnInit() {
      this.http.get('https://jsonplaceholder.typicode.com/users')
        .subscribe((users) => {
          this.users = users;
        }, (err) => {
          console.log(err);
      });
    }
}
