import { Component, OnInit } from '@angular/core';
import { SocialComponent } from '../social/social.component';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer: {};

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.getFooter();
  }
getFooter() {
  this.footer = this.configService.getConfig().footer;
}
}
