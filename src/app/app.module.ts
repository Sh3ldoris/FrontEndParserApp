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
import {TooltipModule} from 'primeng/tooltip';
import { LoadingComponent } from './components/loading/loading.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { Loading2Component } from './components/loading2/loading2.component';
import {DialogModule} from 'primeng/dialog';
import { VisualozationComponent } from './components/visualozation/visualozation.component';

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
    TextAreaComponent,
    LoadingComponent,
    Loading2Component,
    VisualozationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule,
    PanelModule,
    BrowserAnimationsModule,
    TooltipModule,
    MessagesModule,
    MessageModule,
    ScrollPanelModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
