import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MemeTitleComponent } from './components/meme-title/meme-title.component';
import { MemeContainerComponent } from './components/meme-container/meme-container.component';


@NgModule({
  declarations: [
    AppComponent,
    MemeTitleComponent,
    MemeContainerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
