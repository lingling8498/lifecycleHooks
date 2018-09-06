import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PeekABooParentComponent } from './peek-a-boo-parent.component';
import { PeekABooComponent } from './peek-a-boo.component';

@NgModule({
  declarations: [
    AppComponent,
    PeekABooParentComponent,
    PeekABooComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
