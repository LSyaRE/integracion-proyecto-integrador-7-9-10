package yavirac.tickets.feature.respuesta;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RespuestaService {
    @Autowired
    RespuestaRepository respuestaRepository;

    //CRUD = Create, Read, Update, Delete

    public Respuesta save(Respuesta respuesta){

        return respuestaRepository.save(respuesta);
    }

    public Respuesta findById(long id){
        return respuestaRepository.findById(id).orElse(new Respuesta());
    }

    public Respuesta update(Respuesta respuesta){
        return respuestaRepository.save(respuesta);
    }

    public void deleteById(long id){
        respuestaRepository.deleteById(id);
    }

    public List<Respuesta> findByComentario(String term){
        return respuestaRepository.findByComentarioLikeIgnoreCase(term+"%");
    }
    public List<Respuesta> findAll(){
        return respuestaRepository.findAll();
    }

  
    
}
