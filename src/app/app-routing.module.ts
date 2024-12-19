import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListAlbumsComponent } from './albums/list-albums.component';
import { ArchivesComponent } from './archives/archives.component';
import { AddAlbumComponent } from './albums/add-album.component';
import { ListPhotosComponent } from './albums/list-photos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'albums', component: ListAlbumsComponent },
  { path: 'archives', component: ArchivesComponent },
  { path: 'add-album', component: AddAlbumComponent },
  { path: 'albums/:id/photos', component: ListPhotosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
