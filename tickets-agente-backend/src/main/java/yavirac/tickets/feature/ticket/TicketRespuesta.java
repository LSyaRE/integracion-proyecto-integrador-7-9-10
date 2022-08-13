package yavirac.tickets.feature.ticket;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("ticket-solicitante\".\"ticket_respuesta")
public class TicketRespuesta {
    @Id private long id;
    private Long ticketId;
    private Long respuestaId;
}
