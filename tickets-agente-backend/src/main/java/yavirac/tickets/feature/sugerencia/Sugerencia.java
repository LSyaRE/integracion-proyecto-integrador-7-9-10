package yavirac.tickets.feature.sugerencia;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("ticket-agente\".\"sugerencia")
public class Sugerencia {

    @Id
    @Column("sugerencia_id")
    private long sugerenciaId;
    
    private Long motivoId;
    private String sugerenci;
    private Timestamp created;
    private Timestamp updated;
    private boolean enable;
    private boolean archive;
    
    

    @MappedCollection(idColumn = "sugerencia_id")
    private Set<SugerenciaRol> roles = new HashSet<>();
}
