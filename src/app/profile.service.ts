import { Injectable } from '@angular/core';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class PorfileService {

profile: Profile = new Profile('mazzu.j','Juan Mazzucchelli','./assets/images/porfile/jpg')

}
