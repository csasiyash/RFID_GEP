import { CrudService } from './service/crud.service';
import { environment } from './../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AnQrcodeModule } from 'an-qrcode';
import { AppComponent } from './app.component';
import { QrcodesComponent } from './qrcodes/qrcodes.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    QrcodesComponent
  ],
  imports: [
    BrowserModule,
    AnQrcodeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
