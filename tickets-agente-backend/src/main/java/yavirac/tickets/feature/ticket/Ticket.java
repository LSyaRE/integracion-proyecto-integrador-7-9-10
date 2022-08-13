package yavirac.tickets.feature.ticket;




import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("ticket-solicitante\".\"ticket")
public class Ticket {

    @Id
    private long id;
    @Column("usuario_solicitante")
    private int usuarioSolicitante;
    private Long carreraId;
    private boolean enabled;
    private Timestamp updated;
    private Timestamp deleted;
    private Timestamp archived;
    private String description;
    private String jornada;
    private String curso;
    

    @MappedCollection(idColumn = "ticket_id")
    private Set<TicketRespuesta> respuestas = new HashSet<>();
}
