package yavirac.tickets.feature.rol;

import java.sql.Timestamp;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
import lombok.Data;

@Data
@Table("ticket-agente\".\"roles")
public class Rol {

    @Id
    @Column("rol_id")
    private long rolId;
    @Column("nombre")
    private String name;
    @Column("admin")
    private boolean admin;
    @Column("created")
    private Timestamp created;
    @Column("updated")
    private Timestamp updated;
    @Column("enable")
    private boolean enabled;
    @Column("archived")
    private boolean archived;
    @Column("persona_id")
    private Long personaId;
}
