package yavirac.tickets.feature.respuesta;


import java.sql.Timestamp;
import java.util.Set;
import java.util.HashSet;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("ticket-solicitante\".\"respuesta")
public class Respuesta {
    @Id
    private long id;
    private String comentario;
    private Timestamp created;
    private Timestamp updated;
    private boolean enabled;
    private boolean archived;
    @Column("id_ticket")
    private int idTicket;
    private boolean resuelto;
    private int usuarioId;


    @MappedCollection(idColumn = "respuesta_id")
    private Set<RespuestaUsuario> usuarios = new HashSet<>();


}




