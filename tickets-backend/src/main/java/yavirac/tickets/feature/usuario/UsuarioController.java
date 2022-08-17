package yavirac.tickets.feature.usuario;

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
@RequestMapping("/api/usuario")
@CrossOrigin({"*"})
public class UsuarioController {
  
  @Autowired
    UsuarioService usuarioService;

    //CRUD

    //Create
    @PreAuthorize("hasAuthority('USUARIO_CREAR')")
    @PostMapping("/save")
    public Usuario save(@RequestBody Usuario usuario){
        return usuarioService.save(usuario);
    }

    //Read
    @GetMapping(value="/{id}")
    public Usuario findById(@PathVariable long id) {
        return usuarioService.findById(id);
    }

    //Update
    @PreAuthorize("hasAuthority('USUARIO_ACTUALIZAR')")
    @PutMapping("/update")
    public Usuario update(@RequestBody Usuario usuario)
    {
        return usuarioService.save(usuario);
    }

    //Delete
    @PreAuthorize("hasAuthority('USUARIO_ELIMINAR')")
    @DeleteMapping("/deleteById/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable long id){
        usuarioService.deleteById(id);
    }

    @PreAuthorize("hasAuthority('USUARIO_LEER')")
    @GetMapping("/findAll")
    public List<Usuario> findAll(){
        return usuarioService.findAll();
    }

    @GetMapping("/findByNombre/{term}")
    public List<Usuario> findByNombre(@PathVariable String term){
        return usuarioService.findByNombre(term);
    }
}
