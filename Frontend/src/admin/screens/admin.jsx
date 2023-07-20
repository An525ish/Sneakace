import { useState } from "react";
import Topbar from "../utils/Topbar";
import Sidebar from "../utils/Sidebar";
import Dashboard from "../components/Dashboard";
import "../admin.css"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
// import Calendar from "./pages/calendar/calendar";

function Admin() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

    return (

        <div className="admin">
         <Sidebar isSidebar={isSidebar} />        
            <div className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                <Dashboard />

            </div>
        </div>

    );
}

export default Admin;
