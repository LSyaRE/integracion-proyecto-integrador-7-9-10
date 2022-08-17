package yavirac.tickets.feature.respuesta;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;


@RestController
@RequestMapping("/api/respuesta")
@CrossOrigin({"*"})
public class RespuestaController {
    @Autowired
    RespuestaService respuestaService;

    //CRUD

    //Create
    @PreAuthorize("hasAuthority('USUARIO_CREAR')")
    @PostMapping("/save")
    public Respuesta save(@RequestBody Respuesta respuesta){
        return respuestaService.save(respuesta);
    }

    //Read
    @GetMapping("/{id}")
    public Respuesta findById(@PathVariable long id){
        return respuestaService.findById(id);
    }

    //Update
    @PreAuthorize("hasAuthority('USUARIO_ACTUALIZAR')")
    @PutMapping("/update")
    public Respuesta update(@RequestBody Respuesta respuesta)
    {
        return respuestaService.save(respuesta);
    }
    @PreAuthorize("hasAuthority('USUARIO_LEER')")
    @GetMapping("/findAll")
    public List<Respuesta> findAll(){
        return respuestaService.findAll();
    }

    //Delete
    @PreAuthorize("hasAuthority('USUARIO_ELIMINAR')")
    @DeleteMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable long id){
        respuestaService.deleteById(id);
    }

    @GetMapping("/findByComentario/{term}")
    public List<Respuesta> findByComentario(@PathVariable String term){
        return respuestaService.findByComentario(term);
    }
}
