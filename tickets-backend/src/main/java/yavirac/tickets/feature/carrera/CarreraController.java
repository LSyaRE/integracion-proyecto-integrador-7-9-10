package yavirac.tickets.feature.carrera;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.access.prepost.PreAuthorize;
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

@RestController
@RequestMapping("/api/carrera")
@CrossOrigin({"*"})
public class CarreraController {
    
    @Autowired
    CarreraService carreraService;

    //CRUD

    //Create
    //@PreAuthorize("hasAuthority('USUARIO_CREAR')")
    @PostMapping("/save")
    public Carrera save(@RequestBody Carrera carrera) {
        return carreraService.save(carrera);
    }

    //Read
    //@PreAuthorize("hasAuthority('USUARIO_LEER')")
    @GetMapping("/{id}")
    public Carrera findById(@PathVariable long id){
        return carreraService.findById(id);
    }

    //Update
    @PutMapping("/update")
    public Carrera update(@RequestBody Carrera carrera)
    {
        return carreraService.save(carrera);
    }

    //Delete
    //@PreAuthorize("hasAuthority('USUARIO_ELIMINAR')")
    @DeleteMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable long id){
        carreraService.deleteById(id);
    }

    //@PreAuthorize("hasAuthority('USUARIO_LEER')")
    @GetMapping("/findAll")
    public List<Carrera> findAll(){
        return carreraService.findAll();
    }
  
    @GetMapping("/findByNombre/{term}")
    public List<Carrera> findByNombre(@PathVariable String term){
        return carreraService.findByNombre(term);
    }

}
