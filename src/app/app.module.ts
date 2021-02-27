import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AppViewComponent } from './components/app-view/app-view.component';
import { FileDetailsComponent } from './components/file-details/file-details.component';
import { FileDocsOverwiewComponent } from './components/file-details/file-docs-overwiew.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppViewComponent,
    FileDetailsComponent,
    FileDocsOverwiewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
