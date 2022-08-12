package yavirac.tickets.feature.motivo;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("ticket-agente\".\"motivo_sugerencia")
public class MotivoSugerencia {

    @Id
    private long id;
    private Long motivoId;
    private Long sugerenciaId;
    

    
}
