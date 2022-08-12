package yavirac.tickets.feature.carrera;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface CarreraRepository extends CrudRepository<Carrera, Long> {
    List<Carrera> findAll(); 
    List<Carrera>findByNombreLikeIgnoreCase(String term);

    }
