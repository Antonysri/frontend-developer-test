import React from "react";
import { styled, Container, useTheme } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";
import Notifications from "../Notifications";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%"
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent"
}));

const Layout = () => {
  const theme = useTheme();
  const location = useLocation();
  const isProductRoute = location.pathname === "/product" || location.pathname === "/";

  return (
    <MainWrapper>
      <PageWrapper>
        <Header />
        <Container
          sx={{
            padding: "0px !important",
            [theme.breakpoints.up("sm")]: {
              maxWidth: "100%"
            },
            width: "calc(100vw - 6px)"
          }}
        >
          <Outlet />
          {Notifications()}
        </Container>
        {!isProductRoute && <Footer />}
      </PageWrapper>
    </MainWrapper>
  );
};

export default Layout;
