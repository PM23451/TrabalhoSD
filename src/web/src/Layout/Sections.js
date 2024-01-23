import TopTeams from "../Menus/TopTeams";
import Login from "../Menus/Login";
import Registar from "../Menus/Registar";

const Sections = [

    {
        id: "top-teams",
        label: "Top Teams",
        content: <TopTeams/>
    },

    {
        id: "login",
        label: "Login",
        content: <Login/>
    },

    {
        id: "registar",
        label: "Registar",
        content: <Registar/>
    },

    {
        id: "something-else",
        label: "Something Else",
        content: <h1>Something else - Work in progresss</h1>
    }



];

export default Sections;