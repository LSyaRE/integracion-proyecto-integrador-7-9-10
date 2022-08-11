package yavirac.tickets.feature.modulo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface ModuloRepository extends CrudRepository<Modulo, Long> { 
    List<Modulo> findAll();
    List<Modulo> findByNameLikeIgnoreCase(String term);
}
