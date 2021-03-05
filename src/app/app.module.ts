import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AppViewComponent } from './components/app-view/app-view.component';
import { FileDetailsComponent } from './components/file-details/file-details.component';
import { FileDocsOverwiewComponent } from './components/file-details/file-docs-overwiew.component';
import {FileUploadModule} from 'primeng/fileupload';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { VerificationInfoComponent } from './components/verification-info/verification-info.component';
import { SignatureDetailComponent } from './components/signature-detail/signature-detail.component';
import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextAreaComponent } from './components/text-area/text-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppViewComponent,
    FileDetailsComponent,
    FileDocsOverwiewComponent,
    UploadFileComponent,
    VerificationInfoComponent,
    SignatureDetailComponent,
    TextAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule,
    PanelModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
