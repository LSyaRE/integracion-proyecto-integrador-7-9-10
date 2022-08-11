package yavirac.tickets.feature.sugerencia;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface SugerenciaRepository extends CrudRepository<Sugerencia, Long> {

    List<Sugerencia> findAll();
    List<Sugerencia> findBySugerenciLikeIgnoreCase(String term);
}