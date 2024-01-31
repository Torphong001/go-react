import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ItemsList from "./component/Items";
import Students from "./component/Students";
import Subjects from "./component/Subjects";
import ItemFormFind from "./component/itemFormfile";
import ItemFormFindStu from "./component/studentFormfile";
import ItemFormFindSub from "./component/subjectFormfile";

// Custom styles using makeStyles
const useStyles = makeStyles((theme) => ({
  appContainer: {
    padding: theme.spacing(3),
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(3),
  },
  card: {
    padding: theme.spacing(3),
    border: "1px solid #ccc",
    borderRadius: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.appContainer}>
      <Typography variant="h1" component="h1" gutterBottom>
        Front-End
      </Typography>

      <Grid container spacing={3} className={classes.cardContainer}>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.card}>
            <Typography variant="h2" component="h2" gutterBottom>
              Items List
            </Typography>
            <ItemsList />
            <ItemFormFind />
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.card}>
            <Typography variant="h2" component="h2" gutterBottom>
              Subjects
            </Typography>
            <Subjects />
            <ItemFormFindSub />
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.card}>
            <Typography variant="h2" component="h2" gutterBottom>
              Students
            </Typography>
            <Students />
            <ItemFormFindStu />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
