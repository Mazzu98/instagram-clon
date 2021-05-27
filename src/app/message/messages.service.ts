import { Message } from './message';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: Message[] = [
    new Message(1,'hola'),
    new Message(2,'holaaa'),
    new Message(2,'Todo bien?'),
    new Message(1,'si'),
    new Message(1,'vos?'),
    new Message(2,'Todo cheto bro'),
    new Message(2,'con los pibeee'),
    new Message(1,'Habla bien gil'),
    new Message(2,'sali de aca toga'),
    new Message(1,'ds;dlkdsd'),
    new Message(1,'dsadsdas'),
    new Message(1,'dasadsad'),
  ]

constructor(){ }

}
