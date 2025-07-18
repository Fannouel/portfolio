import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Stack, STACKS } from '../data/skills';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  name = 'ANDRIANJAFIMALALA';
  lastname = 'Fanoela';
  status = 'Ingenieur Informatique';

  stacks: Stack[] = STACKS;
  rotated = false;
  images: string[] = [
  'images/caricature.png',
  'images/Portrait.png',
  ];
  currentImageIndex = 0;
  currentImage = this.images[0];
  intervalId: any;

  constructor() {
    if (window.innerWidth < 768) {
      setInterval(() => this.changeImage(), 5000);
    }
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  changeImage() {
    this.rotated = true; // commence la rotation

    setTimeout(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentImageIndex];
      this.rotated = false;
    }, 600);
  }

  onMouseEnter() {
    this.changeImage()
  }
}
