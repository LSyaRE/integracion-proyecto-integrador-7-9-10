package yavirac.tickets.feature.motivo;


import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("motivos")
public class Motivo {
    
    
    @Id
    @Column("motivo_id")
    private long motivoId;

    private String descripcion;
    private Timestamp created;
    private Timestamp update;
    private boolean enabled;
    private boolean archived;

    private Long moduloId;
    
    @MappedCollection(idColumn = "motivo_id")
    private Set<MotivoSugerencia> sugerencias = new HashSet<>();

}
