package yavirac.tickets.feature.persona;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
@RequestMapping("/api/persona")
@CrossOrigin({"*"})
public class PersonaController {
    
    @Autowired
    PersonaService personaService;

    //CRUD

    //Create
    @PostMapping("/save")
    public Persona save(@RequestBody Persona persona){
        return personaService.save(persona);
    }

    //Read
    @GetMapping("/{id}")
    public Persona findById(@PathVariable long id){
        return personaService.findById(id);
    }

    //Update
    @PutMapping("/update")
    public Persona update(@RequestBody Persona persona)
    {
        return personaService.save(persona);
    }

    //Delete
    @DeleteMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable long id){
        personaService.deleteById(id);
    }

    @GetMapping("/findAll")
    public List<Persona> findAll(){
        return personaService.findAll();
    }
    
}
