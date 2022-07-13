import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import newsApi from "./utils/newsApi";
import NewsSection from "./components/NewsSection";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  const [newsContent, setNewsContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    newsApi.getTechNews().then((res) => {
      console.log(res);
      setNewsContent(res);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <>
      <AppBar>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            <Route
              path="/"
              element={<NewsSection newsContent={newsContent.articles} />}
            />
          </Routes>
        </Box>
      </AppBar>
    </>
  );
}

export default App;
