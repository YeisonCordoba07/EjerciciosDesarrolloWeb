package com.example.proyectoestudio.Controllers;

import com.example.proyectoestudio.Entities.Usuario;
import com.example.proyectoestudio.Service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controller {

    @Autowired
    private UsuarioService usuarioService;

    //localhost:8080/imprimir
    @GetMapping("/imprimir")
    public String imprimir(){
        System.out.println("Texto");
        return "Texto2";
    }

    //localhost:8080/getAllUsuarios
    @GetMapping("/getAllUsuarios")
    public List<Usuario> getAllUsuarios(){
        return usuarioService.getAllUsuarios();
    }

    //http://localhost:8080/
    //informacion en el cuerpo
    @PostMapping
    public Usuario crearUsuario(@RequestBody Usuario nuevoUsuario){
        return usuarioService.crearUsuario(nuevoUsuario);
    }

    //http://localhost:8080/4
    @DeleteMapping("/{id}")
    public void borrarUsuario(@PathVariable Integer id){
        usuarioService.borrarUsuario(id);

    }
}
