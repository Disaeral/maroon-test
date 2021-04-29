import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles"; // v1.x
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

const PasswordTab = ({ nextStage, prevStage, onInput, values }) => {
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
          <Typography variant="h6">
            Введите и подтвердите пароль пользователя
          </Typography>
        </AppBar>
        <Container style={{ paddingTop: "6rem", width: "40%" }}>
          <Card style={{ padding: "1rem" }}>
            <TextField
              label="Введите пароль"
              style={{ width: "80%", margin: "1rem" }}
              defaultValue={values.password}
              onChange={onInput("password")}
              type="password"
              name="password"
            />

            <TextField
              name="repeatPassword"
              label="Подтвердите пароль"
              style={{ width: "80%", margin: "1rem" }}
              defaultValue={values.repeatPassword}
              onChange={onInput("repeatPassword")}
              type="password"
            />

            <br />
            <Button onClick={() => prevStage()}>Назад</Button>
            <Button
              onClick={() => {
                nextStage();
              }}
            >
              Далее
            </Button>
          </Card>
        </Container>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default PasswordTab;
