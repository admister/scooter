import { Component, OnInit } from '@angular/core';
import { SocialComponent } from '../social/social.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  // activeTab: string;
  activeTab = 'home';

  page = {
    title: 'welcome to my world',
    logo1: 'logo.png',
    logo2: 'logo-2.png',
  };

  constructor() { }

  ngOnInit() {
  }

  onSelect(link: string): void {
    this.activeTab = link;
  }

}
