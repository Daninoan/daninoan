import React, { Component } from "react";
import { Card, CardHeader, Avatar, CardContent } from "@material-ui/core";

class Experiencias extends Component {
  render() {
    return (
      <Card>
        <CardHeader
          avatar={<Avatar alt="UJI" src="/src/assets/img/logo.svg" />}
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
