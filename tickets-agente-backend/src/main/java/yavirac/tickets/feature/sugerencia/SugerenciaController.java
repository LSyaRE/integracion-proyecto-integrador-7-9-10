package yavirac.tickets.feature.sugerencia;

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
@RequestMapping("/api/sugerencia")
@CrossOrigin({"*"})
public class SugerenciaController {
    
    @Autowired
    SugerenciaService sugerenciaService;

    //CRUD

    //Create
    @PostMapping("/save")
    public Sugerencia save(@RequestBody Sugerencia sugerencia){
        return sugerenciaService.save(sugerencia);
    }

    //Read
    @GetMapping("/{id}")
    public Sugerencia findById(@PathVariable long id){
        return sugerenciaService.findById(id);
    }

    //Update
    @PutMapping("/update")
    public Sugerencia update(@RequestBody Sugerencia sugerencia)
    {
        return sugerenciaService.save(sugerencia);
    }

    //Delete
    @DeleteMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable long id){
        sugerenciaService.deleteById(id);
    }

    @GetMapping("/findAll")
    public List<Sugerencia> findAll(){
        return sugerenciaService.findAll();
    }
    
    @GetMapping("/findByName/{term}")
    public List<Sugerencia> findByName(@PathVariable String term){
        return sugerenciaService.findByName(term);
    }
}
