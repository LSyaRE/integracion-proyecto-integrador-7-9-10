package yavirac.tickets.feature.motivo;
import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class MotivoSugerencia {

    @Id
    private long id;
    private Long motivoId;
    private Long sugerenciaId;
    

    
}
