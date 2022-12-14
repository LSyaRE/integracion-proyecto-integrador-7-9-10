package yavirac.tickets.feature.usuario;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
    List<Usuario> findAll();
    List<Usuario> findByNombreLikeIgnoreCase(String term);
}
