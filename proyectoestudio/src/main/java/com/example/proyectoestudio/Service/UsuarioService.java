package com.example.proyectoestudio.Service;

import com.example.proyectoestudio.Entities.Usuario;
import com.example.proyectoestudio.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;


    public List<Usuario> getAllUsuarios(){
        return usuarioRepository.findAll();
    }

    public Usuario crearUsuario(Usuario nuevoUsuario){
        return usuarioRepository.save(nuevoUsuario);
    }

    public void borrarUsuario(Integer id){
        usuarioRepository.deleteById(id);
    }
}
