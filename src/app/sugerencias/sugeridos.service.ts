import { Injectable } from '@angular/core';
import { Profile } from '../profile';

@Injectable({
  providedIn: 'root'
})
export class SugeridosService {

sujested : Profile[] = [
  new Profile('girl_se3','Ana Melano','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb71LSZsTq4xkmjdD6lg9-20IIQcH5MghHaA&usqp=CAU'),
  new Profile('spect_ds','Carlitos Perez','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV-6dBzrXhqhG8ozzzYvDiwLXcYSbaRN7KfA&usqp=CAU'),
  new Profile('pelags.keep','Mabel Sosa','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBfxES5zZ0sY5RCLSy6O5qBX57wZGdXQMAUQ&usqp=CAU'),
  new Profile('gorse.34','Hector Mendozaa','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ZydvNrijIy5HcFNButAyyfRHVXSWnNB4XA&usqp=CAU'),
  new Profile('miles_rep','Milena Payasa','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWiAo4v-BDl04CzpbrTKhdzFhGWePphVpKfA&usqp=CAU'),
]

}
