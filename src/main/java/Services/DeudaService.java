package Services;

import Gestion.GestionDeudas;
import Modelos.Deudas;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@Path("/deudas")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class DeudaService {

    @Inject
    private GestionDeudas gestionDeudas;

    @GET
    public List<Deudas> getDeudas() {
        return gestionDeudas.getDeudas();
    }
}
