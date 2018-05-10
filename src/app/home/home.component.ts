import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 header: {};

  getBackground() {

    let link;
    if (this.header.background){
      link = 'url(' + this.header.background + ')';
     } else {
     link = 'assets/images/banner-images/banner-image-2.jpg';
   }
    return link ;

  }

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.getHeader();
  }

  getHeader(): void {
    this.header = this.configService.getConfig().header;
  }

}
