import { Component, OnInit } from '@angular/core';
import {Message, MessageService} from "primeng/api";
import {MessagesService} from "../../shared-service/messages.service";

@Component({
  selector: 'app-app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.scss'],
  providers: [MessageService]
})
export class AppViewComponent implements OnInit {

  messagesCount: number = 0;

  constructor(private messageService: MessageService,
              private messagesShowService: MessagesService) { }

  ngOnInit(): void {
    this.messagesShowService.currentMessage.subscribe(data =>{
      if (data != null) {
        this.showViaService(data);
      } else {
        this.clearMessages();
      }
    });
  }

  /**
   * Shows message to the user
   * @param m - message
   */
  showViaService(m: Message) {
    if (this.messagesCount >= 1) {
      this.messageService.clear();
    }
    this.messageService.add(m);
    this.messagesCount++;
  }

  /**
   * Clears message area if there is message displayed
   */
  clearMessages() {
    if (this.messagesCount == 0)
      return;
    this.messageService.clear();
    this.messagesCount = 0;
  }


}
