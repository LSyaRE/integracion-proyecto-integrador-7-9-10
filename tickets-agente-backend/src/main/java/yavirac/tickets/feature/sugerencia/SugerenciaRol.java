package yavirac.tickets.feature.sugerencia;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("ticket-agente\".\"sugerencia_roles")

public class SugerenciaRol {

    @Id
    @Column("sugerencia_id")
    private long id;
    private Long sugerenciaId;
    private Long rolId;
    
}
