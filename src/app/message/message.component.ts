import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { PorfileService } from '../profile.service';
import { StoriesService } from '../stories/stories.service';
import { Story } from '../stories/story';
import { Message } from './message';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {

  profile: Profile
  stories: Story[]
  messages: Message[]

  constructor(private profileService:PorfileService, private storiesService: StoriesService, private messagesService: MessagesService) {
    this.profile = profileService.profile
    this.stories = storiesService.stories
    this.messages = messagesService.messages
   }

  ngOnInit() {
  }

}
