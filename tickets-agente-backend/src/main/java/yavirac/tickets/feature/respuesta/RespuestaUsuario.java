package yavirac.tickets.feature.respuesta;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("ticket-solicitante\".\"respuesta_usuario")
public class RespuestaUsuario {
    @Id private long id;
    private Long respuestaId;
    private Long usuarioId;
}
