import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ticket } from '../../ticket';
import { TicketService } from '../../ticket.service';

@Component({
  selector: 'app-ticket-search',
  templateUrl: './ticket-search.component.html'
})
export class TicketSearchComponent implements OnInit {

  constructor(
    private ticketService: TicketService
  ) { }

  tickets: Ticket[] = [];
  @Output() usrTickEmitter = new EventEmitter<Ticket>();

  ngOnInit(): void {
  }

  onInput(term: string):void {
    if(term.length >=2){
      this.ticketService.findByDescription(term).subscribe(
        (response) => this.tickets = response
      )
    }
    if (term.length ===0){
      this.tickets = [];
    }

  }

  onSelect(ticket: Ticket): void {
    this.usrTickEmitter.emit(ticket);
  }

}
