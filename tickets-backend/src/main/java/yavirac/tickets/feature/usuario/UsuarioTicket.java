package yavirac.tickets.feature.usuario;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("ticket-solicitante\".\"usuario_ticket")
public class UsuarioTicket {

    @Id private long id;
    private Long usuarioId;
    private Long ticketId;
    
}
