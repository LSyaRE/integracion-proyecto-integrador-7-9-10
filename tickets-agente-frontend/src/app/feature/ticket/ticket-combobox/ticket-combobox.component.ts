import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-combobox',
  templateUrl: './ticket-combobox.component.html'

})
export class TicketComboboxComponent implements OnInit {

  constructor(private ticketServices:TicketService) { }

  tickets: Ticket[]= [];
  @Output() ticketEmitter = new EventEmitter<number>();
  @Input() ticketId: number= 0;

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.ticketServices.findAll().subscribe(
      (response) => this.tickets =response
    )

  }

  public onSelect(id:string){
    this.ticketEmitter.emit(parseInt(id));
  }

}
