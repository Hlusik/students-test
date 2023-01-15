import { Component, Input, OnInit } from '@angular/core';

import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() message: string = '';
  @Input() action: string = '';

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  duration: number = 5000;

  constructor(
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    let config = new MatSnackBarConfig();
    config.horizontalPosition = this.horizontalPosition;
    config.verticalPosition = this.verticalPosition;
    config.duration = this.duration;

    this._snackBar.open(this.message, this.action, config);
  }
}
