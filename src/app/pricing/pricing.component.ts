import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricing: {};
  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.getPricing();
  }

  getPricing(): void {
    this.pricing = this.configService.getConfig().pricing;
  }

}
