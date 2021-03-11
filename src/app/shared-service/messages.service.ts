import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Message} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: Message) {
    this.messageSource.next(message);
  }

  clearMessages() {
    this.messageSource.next(null);
  }
}
