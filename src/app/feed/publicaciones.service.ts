import { Injectable } from '@angular/core';
import { Profile } from '../profile';
import { Publicacion } from './publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  publicaciones: Publicacion[] = [
    new Publicacion(new Profile('germi.le2','german loco','https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo94ZcOPXXiWdv5BQ5zT20jU2R1-v_Hbj4iQ&usqp=CAU','San Pedro',2334,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod explicabo earum architecto officiis. Aliquid tenetur expedita accusantium harum dignissimos animi doloremque esse',2),
    new Publicacion(new Profile('gler_wwx','Marta Geler','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5uf2odielYuzQQXTpeZsNDn7V4aBQxo5XQ&usqp=CAU'),'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdcFZiE7X9eCSaOYZCHjHq1MaAXtQyQ9i7w&usqp=CAU','Buenos Aires',542,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod explicabo earum architecto officiis. Aliquid tenetur expedita accusantium harum dignissimos animi doloremque esse',5),
    new Publicacion(new Profile('rare_guy','Jack Miller','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugbEuVyywi6zyn7yrK8YjtSL9a9-i4ufpxw&usqp=CAU'),'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GmQRF-l_Up3wInODbVmTE7ozH0OJLNZljQ&usqp=CAU','La Boca',394,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod explicabo earum architecto officiis. Aliquid tenetur expedita accusantium harum dignissimos animi doloremque esse',14),
    new Publicacion(new Profile('pepe_32','Pedro Palos','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EGgSUMVxTgoqEEFH1WpaurGZOTXDpdX_aw&usqp=CAU'),'https://tripxtours.imgix.net/uploads/dubai_tours/7151b56b36daae9cfca66c185bfc0edf.jpg?auto=compress&w=2000&h=1500&crop=faces&fit=min','Montevideo',2073,'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quod explicabo earum architecto officiis. Aliquid tenetur expedita accusantium harum dignissimos animi doloremque esse',22),
  ]
}
