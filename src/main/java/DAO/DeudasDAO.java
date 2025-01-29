package DAO;

import Modelos.Deudas;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import java.util.List;

@ApplicationScoped
public class DeudasDAO {

    @PersistenceContext(unitName = "PrograWeb")
    private EntityManager em;

    public List<Deudas> getDeudas() {
        return em.createQuery("SELECT d FROM Deudas d", Deudas.class).getResultList();
    }
}
