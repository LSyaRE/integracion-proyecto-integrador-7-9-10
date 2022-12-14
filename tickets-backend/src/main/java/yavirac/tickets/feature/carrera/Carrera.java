package yavirac.tickets.feature.carrera;



import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("ticket-solicitante\".\"carrera")
public class Carrera {

    @Id
    private long id;
    private String nombre;
    private Timestamp updated;
    private Timestamp deleted;
    private boolean enabled;
    private boolean archived;
    @Column("tipo_carrera")
    private String tipoCarrera;
    @Column("usuario_id")
    private Long usuarioId;

    @MappedCollection(idColumn = "carrera_id")
    private Set<CarreraUsuario> usuarios = new HashSet<>();

}
