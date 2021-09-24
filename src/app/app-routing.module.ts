import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AlbumsDetailsComponent } from './albums-details/albums-details.component';
import { MyAlbumsComponent } from './my-albums/my-albums.component';
import { CreateAlbumsComponent } from './create-albums/create-albums.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { RecentAlbumsComponent } from './recent-albums/recent-albums.component';
const routes: Routes = [
  { path: 'albums/recent', component: RecentAlbumsComponent },
  { path: 'profile/:profileId', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'album/:albumId', component: AlbumsDetailsComponent },
  { path: 'albums', component: MyAlbumsComponent },
  { path: 'create', component: CreateAlbumsComponent },
  { path: 'upload/:albumId', component: UploadPictureComponent },
  { path: 'photo/:photoId', component: PhotoDetailsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
