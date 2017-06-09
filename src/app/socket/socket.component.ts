import {Component, OnInit, OnDestroy} from '@angular/core';
// import {Control} from '@angular/common';
import { NgModel} from '@angular/forms';


import {SocketService} from '../services/socket.service';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css'],
  providers: [SocketService]
})
export class SocketComponent implements OnInit, OnDestroy {

  messages = [];
  connection;
  message;

  constructor(private socketService: SocketService) {
  }

  sendMessage() {
    this.socketService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.socketService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
