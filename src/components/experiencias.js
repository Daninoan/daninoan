import React, { Component } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography
} from "@material-ui/core";
import logoUji from "../assets/img/simbol-UJI-color.jpg";

class Experiencias extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          avatar={<Avatar alt="UJI" src={logoUji} />}
          title="Grado en estudios ingleses"
          subheader="Universitat Jaume I"
        />
        <CardContent>
          <Typography variant="body2"></Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Experiencias;
