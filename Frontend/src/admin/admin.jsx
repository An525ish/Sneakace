import { useState } from "react";
import Topbar from "./utils/Topbar";
import Sidebar from "./utils/Sidebar";
import Dashboard from "./Dashboard";
import "./admin.css"
// import Team from "./pages/team";
// import Invoices from "./pages/invoices";
// import Contacts from "./pages/contacts";
// import Bar from "./pages/bar";
// import Form from "./pages/form";
// import Line from "./pages/line";
// import Pie from "./pages/pie";
// import FAQ from "./pages/faq";
// import Geography from "./pages/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
// import Calendar from "./pages/calendar/calendar";

function Admin() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

    return (

        <div className="admin">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                <Dashboard />

            </main>
        </div>

    );
}

export default Admin;
