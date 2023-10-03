import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('animalVideo', { static: true }) animalVideo!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.muteVideo();
  }

  muteVideo(): void {
    const video: HTMLVideoElement = this.animalVideo.nativeElement;
    video.muted = true;
  }
}
