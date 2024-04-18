import { CanvaseComponent } from './../../../../../shared/canvase/canvase.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, CanvaseComponent, NgxTypedJsModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  ngOnInit(): void {}
}
