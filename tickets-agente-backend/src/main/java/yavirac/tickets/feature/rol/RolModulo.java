package yavirac.tickets.feature.rol;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("ticket-agente\".\"rol_modulo")
public class RolModulo {
    
    @Id
    private long id;
    private Long rolId;
    private Long moduloId;

}