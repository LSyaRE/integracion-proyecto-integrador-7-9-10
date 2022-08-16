package yavirac.tickets.feature.persona;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaService {

    @Autowired
    PersonaRepository personaRepository;

    //CRUD = Create, Read, Update, Delete

    public Persona save(Persona persona){

        return personaRepository.save(persona);
    }

    public Persona findById(long id){
        return personaRepository.findById(id).orElse(new Persona());
    }

    public Persona update(Persona persona){
        return personaRepository.save(persona);
    }

    public void deleteById(long id){
        personaRepository.deleteById(id);
    }

    public List <Persona> findAll(){
        return personaRepository.findAll();
    }
}
