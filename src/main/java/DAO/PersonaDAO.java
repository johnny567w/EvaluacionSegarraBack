package DAO;

import Modelos.Persona;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

import java.util.List;

@ApplicationScoped
public class PersonaDAO {

    @PersistenceContext(unitName = "PrograWeb")
    private EntityManager em;

    @Transactional
    public void crearUsuario(Persona persona) {
        em.persist(persona);
    }

    @Transactional
    public Persona actualizarUsuario(Persona persona) {
        return em.merge(persona);
    }

    public Persona getUsuarioPorCedula(String cedula) {
        return em.createQuery("SELECT p FROM Persona p WHERE p.cedula = :cedula", Persona.class)
                .setParameter("cedula", cedula)
                .getSingleResult();
    }

    public List<Persona> getUsuarios() {
        return em.createQuery("SELECT p FROM Persona p", Persona.class).getResultList();
    }
}
