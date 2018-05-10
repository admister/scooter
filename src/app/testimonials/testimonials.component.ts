import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  users = [];
  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = this.configService.getConfig().users;
  }
}
