import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrReaderComponent } from './qr-reader.component';
import { RouterModule } from '@angular/router';
import { ZXingScannerModule } from '@zxing/ngx-scanner';



@NgModule({
  declarations: [QrReaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: QrReaderComponent }]),
    ZXingScannerModule
  ]
})
export class QrReaderModule { }
