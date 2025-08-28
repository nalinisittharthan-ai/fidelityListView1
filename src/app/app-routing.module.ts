import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ShowRecordComponent } from './components/show-record/show-record.component';
import { ActivityFeedComponent } from './components/activity-feed/activity-feed.component';
//import { ShowRecordComponent } from './components/show-record/show-record.component';


const routes: Routes = [
  //{ path: '', redirectTo: 'app-file-upload', pathMatch: 'full' },
  { path: 'file-upload', component: FileUploadComponent },
    { path: 'show-record', component: ShowRecordComponent },
        { path: 'activity-feed', component: ActivityFeedComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
