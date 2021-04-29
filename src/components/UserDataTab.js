import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles"; // v1.x
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

const UserDataTab = ({ nextStage, onInput, values }) => {
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
          <Typography variant="h6">Введите данные пользователя</Typography>
        </AppBar>
        <Container style={{ paddingTop: "6rem", width: "40%" }}>
          <Card style={{ padding: "1rem" }}>
            <TextField
              style={{ width: "80%", margin: "1rem" }}
              label="Имя"
              name="firstName"
              defaultValue={values.firstName}
              onChange={onInput("firstName")}
            />
            <br />
            <TextField
              style={{ width: "80%", margin: "1rem" }}
              label="Фамилия"
              name="lastName"
              defaultValue={values.lastName}
              onChange={onInput("lastName")}
            />
            <br />
            <TextField
              style={{ width: "80%", margin: "1rem" }}
              label="Отчество"
              name="middleName"
              defaultValue={values.middleName}
              onChange={onInput("middleName")}
            />
            <br />
            <TextField
              style={{ width: "80%", padding: "1rem" }}
              type="date"
              defaultValue="2021-05-24"
              name="dateOfBirth"
              onChange={onInput("dateOfBirth")}
            />
            <br />
            <Button onClick={() => nextStage()}>Далее</Button>
          </Card>
        </Container>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default UserDataTab;
