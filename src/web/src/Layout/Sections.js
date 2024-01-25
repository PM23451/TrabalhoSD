import TopTeams from "../Menus/TopTeams";
import Login from "../Menus/Login";
import Registar from "../Menus/Registar";
import CRUDE from "../Menus/CRUDE";

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
        id: "top-teams",
        label: "Top Teams",
        content: <TopTeams/>
    },

    {
        id: "crud",
        label: "CRUD Crashes",
        content: <CRUDE/>
    },

    {
        id: "something-else",
        label: "Something Else",
        content: <h1>Something else - Work in progresss</h1>
    }



];

export default Sections;