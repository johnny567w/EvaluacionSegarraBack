package Gestion;

import DAO.PersonaDAO;
import Modelos.Persona;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.util.List;

@ApplicationScoped
public class GestionPersona {

    @Inject
    private PersonaDAO personaDAO;

    public List<Persona> getUsuarios() {
        return personaDAO.getUsuarios();
    }

    public Persona getUsuarioPorCedula(String cedula) {
        return personaDAO.getUsuarioPorCedula(cedula);
    }

    public void crearUsuario(Persona persona) {
        personaDAO.crearUsuario(persona);
    }

    public Persona actualizarUsuario(Persona persona) {
        return personaDAO.actualizarUsuario(persona);
    }
}
