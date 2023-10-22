import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent {
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
