import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function Loader() {
  return (
    <Box
      sx={{ position: "fixed", top: 0, left: 0, zIndex: 1300, width: "100%" }}
    >
      <LinearProgress />
    </Box>
  );
}
export default Loader;
