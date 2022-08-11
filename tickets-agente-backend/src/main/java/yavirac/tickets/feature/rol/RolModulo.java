package yavirac.tickets.feature.rol;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class RolModulo {
    
    @Id
    private long id;
    private Long rolId;
    private Long moduloId;

}