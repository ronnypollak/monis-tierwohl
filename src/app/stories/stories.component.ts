import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent {
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
