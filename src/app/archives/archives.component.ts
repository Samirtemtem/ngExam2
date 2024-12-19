import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {
  archivedAlbums: Album[] = [];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.fetchArchivedAlbums();
  }

  fetchArchivedAlbums(): void {
    this.albumService.getArchivedAlbums().subscribe((albums: Album[]) => {
      this.archivedAlbums = albums;
    });
  }
}
