import axios from 'axios';


var usuarioService = {


    postUsuario: async (Cadastro) => {
        var createUsuario = axios.post(`http://localhost:5001/users/`,Cadastro);
        return await createUsuario;
      },

    /*postUsuario: async (email, senha) => {
    var usuarioAPI = axios.post(`http://localhost:5000/apiusuario/user`,formData);
    return await clienteAPI;
    }*/
}
export default usuarioService;