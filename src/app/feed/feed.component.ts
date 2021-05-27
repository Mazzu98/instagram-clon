import { Component, OnInit } from '@angular/core';
import { Publicacion } from './publicacion';
import { PublicacionesService } from './publicaciones.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {

  masDesc: boolean = false
  masText: string = 'mas'

  publicaciones:Publicacion[]

  constructor(private publicacionesService:PublicacionesService) { 
    this.publicaciones = publicacionesService.publicaciones
  }

  ngOnInit() {
  }

  masToggle(){
    if(this.masDesc === false){
      this.masText = 'menos'
      this.masDesc = true
    }
    else if(this.masDesc === true){
      this.masText = 'más'
      this.masDesc = false
    }
  }

}
