package yavirac.tickets.feature.motivo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface MotivoRepository extends CrudRepository<Motivo, Long> {

    List<Motivo> findAll();
    List<Motivo> findByDescripcionLikeIgnoreCase(String term);
    
}
