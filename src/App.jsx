import "./App.css";
import Box from "@mui/material/Box";
import VerticalNav from "./Components/AppBar/VerticalNav";
import CartSummary from "./Pages/CartSummary";
import {useLocation} from "react-router-dom";
import AppRoutes from "./Router/AppRoutes";

function App() {
  const location = useLocation();
  return (
    <Box>
      <div>
    
    </div>

      {/* <HorizontalNav /> */}
      <Box display="flex" width="100%" height="100vh">
        <Box
          sx={{ width: "100px", backgroundColor: "#0a3e66" }}
          position={"sticky"}
        >
          <VerticalNav />
        </Box>
        {location !== '/sales' &&
      
        <Box
          display="flex"
          flex={1}
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box sx={{ flex: 2 }}>
            <CartSummary />
          </Box>
          <Box sx={{ flex: 4, maxWidth: "600px", backgroundColor: "#F1F3F6" }}>

            <AppRoutes />
          </Box>
        </Box>
}
      </Box>
    </Box>
  );
}

export default App;
