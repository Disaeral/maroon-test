import React, { useContext } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles"; // v1.x
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import { Context } from "..";
import { Typography } from "@material-ui/core";

const ConfirmTab = ({ prevStage }) => {
  const labels = ["Имя", "Фамилия", "Отчество", "Дата рождения", "Почта"];
  const { formData } = useContext(Context);
  let { data } = formData;
  const dataForSubmit = Object.entries(data);

  const submit = (data) => {
    const submitData = new FormData();

    data.forEach((array) => {
      submitData.append(array[0], array[1]);
    });
    //used to inspect formdata
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/", true);
    xhr.send(submitData);
  };

  //replaces input names with labels
  data = Object.entries(data).slice(0, 5);
  data.map((array, id) => (array[0] = labels[id]));

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
          <Typography variant="h6">Подтвердите данные</Typography>
        </AppBar>
        <Container style={{ paddingTop: "6rem", width: "40%" }}>
          <Card style={{ padding: "1rem" }}>
            <List>
              {data.map((array, id) => (
                <ListItem key={id}>
                  {array[0]} : {array[1]?array[1]:"Не указано"}
                </ListItem>
              ))}
            </List>

            <Button onClick={() => prevStage()}>Назад</Button>
            <Button type="submit" onClick={() => submit(dataForSubmit)}>
              Отправить
            </Button>
          </Card>
        </Container>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default ConfirmTab;
