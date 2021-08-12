import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
    };
    this.handlefnameChange = this.handlefnameChange.bind(this);
    this.handlelnameChange = this.handlelnameChange.bind(this);
    this.handleemailChange = this.handleemailChange.bind(this);
    this.sendData = this.sendData.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
  }
  ////////////////////////////////////////// Handle the changes //////////////////////////////////////////
  handlefnameChange(e) {
    this.setState({
      fname: e.target.value,
    });
  }

  handlelnameChange(e) {
    this.setState({
      lname: e.target.value,
    });
  }

  handleemailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  ////////////////////////////// Pass data to the parent component & move to the next page //////////////////////////////
  sendData(counter) {
    this.props.parentCallback([
      this.state.fname,
      this.state.lname,
      this.state.email,
      counter,
    ]);
  }

  onClickNext() {
    this.sendData(1);  
  }

  ////////////////////////////// Rendering //////////////////////////////
  render() {
    return (
      <div style={{ padding: 40, margin: 40 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} align="center">
            <Typography variant="subtitle1" gutterBottom>
              Add your personal information:
            </Typography>
          </Grid>

          <Grid
            container
            item
            xs={12}
            spacing={2}
            justify="center"
            alignItems="center"
            style={{ marginTop: 12, marginLeft: 250, marginRight: 250 }}
          >
            <Grid item xs={6} align="center">
              <TextField
                required
                fullWidth
                id="fname"
                label="First name"
                variant="outlined"
                onChange={this.handlefnameChange}
              />
            </Grid>

            <Grid item xs={6} align="center">
              <TextField
                required
                fullWidth
                id="lname"
                label="Last name"
                variant="outlined"
                onChange={this.handlelnameChange}
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            spacing={2}
            justify="center"
            alignItems="center"
            style={{ marginTop: 12, marginLeft: 250, marginRight: 250 }}
          >
            <Grid item xs={12} align="center">
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                onChange={this.handleemailChange}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} align="right">
          <IconButton
            aria-label="delete"
            size="medium"
            variant="contained"
            onClick={this.onClickNext}
            style={{
              color: "#004850",
              marginRight: 150,
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            <ArrowForwardOutlinedIcon fontSize="inherit" />
          </IconButton>
        </Grid>
      </div>
    );
  }
}
