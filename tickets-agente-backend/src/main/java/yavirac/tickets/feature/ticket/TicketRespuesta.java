package yavirac.tickets.feature.ticket;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data

public class TicketRespuesta {
    @Id private long id;
    private Long ticketId;
    private Long respuestaId;
}
