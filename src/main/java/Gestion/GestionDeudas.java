package Gestion;

import DAO.DeudasDAO;
import Modelos.Deudas;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.util.List;

@ApplicationScoped
public class GestionDeudas {

    @Inject
    private DeudasDAO deudasDAO;

    public List<Deudas> getDeudas() {
        return deudasDAO.getDeudas();
    }
}
