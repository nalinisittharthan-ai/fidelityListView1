import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { MatNativeDateModule } from '@angular/material';
 import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { SimpleMatTableComponent } from './app.component';
//import { SimpleMatTableComponent } from './components/simple-mat-table/simple-mat-table.component';
import { ShowRecordComponent } from './components/show-record/show-record.component';
import { ActivityFeedComponent } from './components/activity-feed/activity-feed.component';


import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
//import { ShowRecordComponent } from './components/show-record/show-record.component';
//import { FileUploadComponent } from './components/file-upload/file-upload.component';
   import { AgGridModule } from 'ag-grid-angular';
     import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
  // import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
     //    MatSortModule, MatTableModule } from "@angular/material";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ShowRecordComponent,
    ActivityFeedComponent
   
  ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
     AgGridModule,
      MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
    MatListModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
