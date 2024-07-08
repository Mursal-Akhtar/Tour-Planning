import {
  Box,
  Container,
  Typography,
  BottomNavigation,
  Paper,
} from "@mui/material";
import React from "react";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordian";
import BasicModal from "../components/Model";

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component={"h1"} marginTop={3}>
      Explore the World in Vegas
    </Typography>
    <Box marginTop={3} sx={{ display: "flex" }}>
      <img src="/Vegas.jpg" alt="imagesdlodsfgo" height={325} />
      <ImageCollage />
    </Box>
    <Box>
      <Typography variant="h6" component={"h4"} marginTop={3}>
        AFrequently Asked Questions
      </Typography>
      <Typography variant="paragraph" component={"p"} marginTop={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
        interdum magna. Nam feugiat nulla vitae placerat sodales. In a ultricies
        ipsum. Nunc vel orci sed lorem imperdiet ultrices eu cursus justo. Fusce
        semper ornare lacus. Cras aliquam risus at. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Integer sed interdum magna. Nam feugiat
        nulla vitae placerat sodales. In a ultricies ipsum. Nunc vel orci sed
        lorem imperdiet ultrices eu cursus justo. Fusce semper ornare lacus.
        Cras aliquam risus at.
      </Typography>
    </Box>
    <Box marginBottom={10}>
      <Typography variant="h6" component={"h4"} marginTop={3} marginBottom={5}>
        About this ticket
      </Typography>
      <CustomizedAccordions></CustomizedAccordions>
    </Box>

    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        <BasicModal />
      </BottomNavigation>
    </Paper>
  </Container>
);

export default Tour;
