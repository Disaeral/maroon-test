import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles"; // v1.x
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

const EmailTab = ({ nextStage, prevStage, onInput, values }) => {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar
          position="static"
          style={{
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Введите email пользователя</Typography>
        </AppBar>{" "}
        <Container style={{ paddingTop: "6rem", width: "40%" }}>
          <Card style={{ padding: "1rem" }}>
            <TextField
              style={{ width: "80%", margin: "1rem" }}
              label="Email"
              name="email"
              defaultValue={values.email}
              onChange={onInput("email")}
            />

            <br />
            <Button onClick={() => prevStage()}>Назад</Button>
            <Button onClick={() => nextStage()}>Далее</Button>
          </Card>
        </Container>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default EmailTab;
