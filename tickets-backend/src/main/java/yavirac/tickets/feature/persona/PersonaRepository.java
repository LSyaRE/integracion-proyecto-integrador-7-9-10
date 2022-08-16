package yavirac.tickets.feature.persona;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface PersonaRepository extends CrudRepository<Persona, Long> {
    
    List<Persona> findAll();
}
