// this is where I'll declare all important modules that need to be used accross the application

import { NgModule,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// import { environment } from '@env/environment';
// import { UtilsModule, LoggerService } from 'utils';
import { MAT_DATE_LOCALE } from '@angular/material';
import { AngularMaterialModule } from '../../lib/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: []
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {

  }

 }
