package Services;

import Gestion.GestionPersona;
import Modelos.Persona;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/usuarios")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PersonaService {

    @Inject
    private GestionPersona gestionPersona;

    @GET
    public Response getUsuarios() {
        try {
            List<Persona> usuarios = gestionPersona.getUsuarios();
            return Response.ok(usuarios).build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity("Error al obtener usuarios: " + e.getMessage()).build();
        }
    }


    @POST
    public void crearUsuario(Persona persona) {
        gestionPersona.crearUsuario(persona);
    }

    @GET
    @Path("/{cedula}")
    public Persona getUsuarioPorCedula(@PathParam("cedula") String cedula) {
        return gestionPersona.getUsuarioPorCedula(cedula);
    }
}
