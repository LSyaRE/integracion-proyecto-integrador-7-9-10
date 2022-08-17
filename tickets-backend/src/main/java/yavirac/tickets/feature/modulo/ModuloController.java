package yavirac.tickets.feature.modulo;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
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

@RestController
@RequestMapping("/api/modulo")
@CrossOrigin({"*"})
public class ModuloController {
    
    @Autowired
    ModuloService moduloService;

    //CRUD

    //Create
    @PreAuthorize("hasAuthority('USUARIO_CREAR')")
    @PostMapping("/save")
    public Modulo save(@RequestBody Modulo modulo){
        return moduloService.save(modulo);
    }

    //Read
    @GetMapping("/{id}")
    public Modulo findById(@PathVariable long id){
        return moduloService.findById(id);
    }

    //Update
    @PreAuthorize("hasAuthority('USUARIO_ACTUALIZAR')")
    @PutMapping("/update")
    public Modulo update(@RequestBody Modulo modulo)
    {
        return moduloService.save(modulo);
    }

    //Delete
    @PreAuthorize("hasAuthority('USUARIO_ELIMINAR')")
    @DeleteMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable long id){
        moduloService.deleteById(id);
    }
    @PreAuthorize("hasAuthority('USUARIO_LEER')")
    @GetMapping("/findAll")
    public List<Modulo> findAll(){
        return moduloService.findAll();
    }

    @GetMapping("/findByName/{term}")
    public List<Modulo> findByName(@PathVariable String term){
        return moduloService.findByName(term);
    }

}
