import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EntryComponent} from './entry/entry.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {EntrylistComponent} from './entrylist/entrylist.component';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';
import {HomepageComponent} from './homepage/homepage.component';
import {AddEntryComponent} from './add-entry/add-entry.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: 'entry/:id', component: EntryComponent},
  {
    path: 'entries',
    component: HomepageComponent,
    data: {title: 'Entry List'}
  },
  {
    path: 'add',
    component: AddEntryComponent,
    data: {title: 'New Entry'}
  },
  {
    path: '',
    redirectTo: '/entries',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    EntrylistComponent,
    HomepageComponent,
    AddEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
