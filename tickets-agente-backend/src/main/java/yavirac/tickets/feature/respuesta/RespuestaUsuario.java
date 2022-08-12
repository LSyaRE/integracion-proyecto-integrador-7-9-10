package yavirac.tickets.feature.respuesta;

import org.springframework.data.annotation.Id;
import lombok.Data;

@Data
public class RespuestaUsuario {
    @Id private long id;
    private Long respuestaId;
    private Long usuarioId;
}
