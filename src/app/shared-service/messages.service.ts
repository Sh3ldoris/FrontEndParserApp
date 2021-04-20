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

  /**
   * Changes message to display between components
   * @param message
   */
  changeMessage(message: Message): void {
    this.messageSource.next(message);
  }

  clearMessages(): void {
    this.messageSource.next(null);
  }
}
