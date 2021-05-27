import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { PorfileService } from '../profile.service';
import { SugeridosService } from './sugeridos.service';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
})
export class SugerenciasComponent implements OnInit {

  profile:Profile
  sugeridos:Profile[]

  constructor(private profileService: PorfileService,private sugeridosService:SugeridosService) {
    this.profile = profileService.profile
    this.sugeridos = sugeridosService.sujested
   }

  ngOnInit() {
  }

}
