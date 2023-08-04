import { Outlet } from "react-router-dom";
import SearchAppBar from "./Navbar";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <>
      <SearchAppBar />
      <Container sx={{ my: 5 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
