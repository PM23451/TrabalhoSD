import TopTeams from "../Menus/TopTeams";
import Login from "../Menus/Login";
import Registar from "../Menus/Registar";
import InserirCrash from "../Menus/InserirCrash";
import ListarCrash from "../Menus/ListarCrash";

const Sections = [

    {
        id: "registar",
        label: "Registar",
        content: <Registar/>
    },

    {
        id: "login",
        label: "Login",
        content: <Login/>
    },

    {
        id: "insert-crash",
        label: "Inserir Crash",
        content: <InserirCrash/>,

    },

    {
        id: "listar-crash",
        label: "Listar Crash",
        content: <ListarCrash/>,

    }
];

export default Sections;