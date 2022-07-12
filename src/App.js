import AppBar from "./components/AppBar";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import newsApi from "./utils/newsApi";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

newsApi.getTechNews().then((res) => console.log(res));

function App() {
  return (
    <>
      <AppBar>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Typography variant="h3">ニュース</Typography>
        </Box>
      </AppBar>
    </>
  );
}

export default App;
