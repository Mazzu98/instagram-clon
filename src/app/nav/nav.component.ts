import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { PorfileService } from '../profile.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {

  profile:Profile
  profileClick: boolean = false

  constructor(private profileService: PorfileService) {
    this.profile = profileService.profile
   }

  ngOnInit() {
  }

}
