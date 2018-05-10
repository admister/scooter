import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleryImages: string[ ];

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.getGalleryImages();
  }

  getGalleryImages(): void {
    this.galleryImages = this.configService.getConfig().galleryImages;
  }

}
