package com.example.proyectoestudio.Repository;

import com.example.proyectoestudio.Entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}
