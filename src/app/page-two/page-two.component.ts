import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
})
export class PageTwoComponent implements OnInit {
  constructor(private http: HttpClient) {}

  res: any;

  ngOnInit(): void {}

  getAlgodonJson() {
    this.http.get('https://algodon.free.beeceptor.com/json').subscribe(
      (response) => {
        this.res = response;
      },
      (err) => {
        alert('Error al llamar la api https://algodon.free.beeceptor.com/json');
      }
    );
  }
}
