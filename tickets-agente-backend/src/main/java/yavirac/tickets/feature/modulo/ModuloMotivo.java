package yavirac.tickets.feature.modulo;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("modulo_motivo")

public class ModuloMotivo {

    @Id
    @Column("modulo_motivo_id")
    private long id;
    private Long moduloId;
    private Long motivoId;
    private String comentario;
    
}
