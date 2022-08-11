package yavirac.tickets.feature.persona;
import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("personas")
public class Persona {

    @Id
    @Column("persona_id")
    private long personaId;
    private String name;
    private String dni;
    private boolean enabled;
    private Timestamp updated;
    private Timestamp created;
    
}
