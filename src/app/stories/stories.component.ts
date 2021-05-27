import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { StoriesService } from './stories.service';
import { Story } from './story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
})
export class StoriesComponent implements OnInit {

  storyButtonPressed: number = 0
  stories: Story[]
  cantStories: number 


  constructor(private storiesService:StoriesService) {
    this.stories = storiesService.stories
    this.cantStories = this.stories.length
   }

  ngOnInit() {
  }
  
  /* 96.5 px por story */

  storyLeft(){
    gsap.to('#stories',{x:'+=289.5',duration:.3})
    this.storyButtonPressed--
  }
  storyRight(){
    gsap.to('#stories',{x:'-=289.5',duration:.3})
    this.storyButtonPressed++
  }

}
