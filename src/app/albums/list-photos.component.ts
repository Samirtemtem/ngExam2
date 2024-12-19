import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.css']
})
export class ListPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId: number;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.albumId = +this.route.snapshot.paramMap.get('id');
    this.getPhotos();
  }

  getPhotos(): void {
    this.photoService.getPhotosByAlbumId(this.albumId).subscribe((photos) => {
      this.photos = photos;
    });
  }
}
