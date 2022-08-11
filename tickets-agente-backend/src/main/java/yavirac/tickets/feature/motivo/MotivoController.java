package yavirac.tickets.feature.motivo;

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
@RequestMapping("/api/motivo")
@CrossOrigin({"*"})

public class MotivoController {

    @Autowired
    MotivoService motivoService;

    //Crud

     //Create
     @PostMapping("/save")
     public Motivo save(@RequestBody Motivo motivo){
         return motivoService.save(motivo);
     }
 
     //Read
     @GetMapping("/{id}")
     public Motivo findById(@PathVariable long id){
         return motivoService.findById(id);
     }
 
     //Update
     @PutMapping("/update")
     public Motivo update(@RequestBody Motivo motivo)
     {
         return motivoService.save(motivo);
     }
 
     //Delete
     @DeleteMapping("/deleteById/{id}")
     @ResponseStatus(HttpStatus.NO_CONTENT)
     public void delete(@PathVariable long id){
         motivoService.deleteById(id);
     }
    
     @GetMapping("/findAll")
     public List<Motivo> findAll(){
         return motivoService.findAll();
     }
 
     @GetMapping("/findByName/{term}")
     public List<Motivo> findByName(@PathVariable String term){
         return motivoService.findByName(term);
     }
    
}