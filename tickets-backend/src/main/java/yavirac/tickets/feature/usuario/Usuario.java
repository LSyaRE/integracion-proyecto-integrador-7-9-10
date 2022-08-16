package yavirac.tickets.feature.usuario;



import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("ticket-solicitante\".\"usuario")
public class Usuario {

  @Id
  private long id;
  @Column("rol_id")
  private int rolId;
  private String nombre;
  private String correo;
  private String password;
  private Timestamp updated;
  private Timestamp deleted;
  private boolean enabled;
  private boolean archived;
  private Long carreraId;

  @MappedCollection(idColumn = "usuario_id")
  private Set<UsuarioTicket> usrtickets = new HashSet<>();
}
