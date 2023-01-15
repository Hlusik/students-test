import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
  ],
  exports: [MessageComponent],
})
export class MessageModule { }
