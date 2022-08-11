package yavirac.tickets.feature.sugerencia;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SugerenciaService {

    @Autowired
    SugerenciaRepository sugerenciaRepository;

    //CRUD = Create, Read, Update, Delete

    public Sugerencia save(Sugerencia sugerencia){

        return sugerenciaRepository.save(sugerencia);
    }

    public Sugerencia findById(long id){
        return sugerenciaRepository.findById(id).orElse(new Sugerencia());
    }

    public Sugerencia update(Sugerencia sugerencia){
        return sugerenciaRepository.save(sugerencia);
    }

    public void deleteById(long id){
        sugerenciaRepository.deleteById(id);
    }
    
    public List<Sugerencia> findAll(){
        return sugerenciaRepository.findAll();
    }

    public List<Sugerencia> findByName(String term){
        return sugerenciaRepository.findBySugerenciLikeIgnoreCase(term+"%");
    }
}
