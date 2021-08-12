import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import countryList from "react-select-country-list";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";






export default class VideoInfo extends Component {
  defaultDuration = 15;
  options = countryList().getData();
  settings = [{ setting: "Public Place" }, { setting: "Mass Gathering" }];

  constructor(props) {
    super(props);
    this.state = {
      Placename: "",
      setting: "select",
      country: "select",
      duration: this.defaultDuration,
      date: "2021-07-25",
      sendEmail: true,
      publish: true,
      personalInfo: this.props.children[1][1],
      videoname: this.props.children[1][0],
    };

    this.handlePlacenameChange = this.handlePlacenameChange.bind(this);
    this.handlesettingChange = this.handlesettingChange.bind(this);
    this.handlecountryChange = this.handlecountryChange.bind(this);
    this.handledurationChange = this.handledurationChange.bind(this);
    this.handledateChange = this.handledateChange.bind(this);
    this.handlesendEmailChange = this.handlesendEmailChange.bind(this);
    this.handlepublishChange = this.handlepublishChange.bind(this);
    this.sendData = this.sendData.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
    this.onClickEstimate = this.onClickEstimate.bind(this);
    this.handleOptionSelects = this.handleOptionSelects.bind(this);
  }

  ////////////////////////////////////////// Handle the changes //////////////////////////////////////////

  handlePlacenameChange(e) {
    this.setState({
      Placename: e.target.value,
    });
  }

  handlesettingChange(e) {
    const inputValue = e;

    this.setState({
      setting: inputValue.label,
    });
    let t = this.state.country;
    console.log(inputValue, t);
    return inputValue;
  }
  
  handledurationChange(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  handledateChange(e) {
    this.setState({
      date: e.target.value,
    });
  }

  handlecountryChange(e) {
    console.log(e.currentTarget.innerText);
    this.setState({
      country: e.currentTarget.innerText,
    });
  }

  handlesendEmailChange() {
    this.setState({
      sendEmail: !this.state.sendEmail,
    });
  }

  handlepublishChange() {
    this.setState({
      publish: !this.state.publish,
    });
  }

  handleOptionSelects(e) {
    this.setState({
      setting: e.currentTarget.innerText,
    });
  }
  
  ////////////////////////////// Move to the previous page //////////////////////////////

  sendData(counter) {
    this.props.parentCallback([
      this.state.Placename,
      this.state.setting,
      this.state.country,
      this.state.duration,
      this.state.date,
      this.state.sendEmail,
      this.state.publish,
      counter,
    ]);
  }

  onClickBack() {
   
  }

  ////////////////////////////// Store data in the database //////////////////////////////
  onClickEstimate() {
   
  }

  ////////////////////////////// Rendering //////////////////////////////
  render() {
    let checkLoading = this.state.loadig;
    let checkResult = this.state.Result;
    const n = this.settings;
    console.log(n);
    console.log(checkLoading, checkResult);
    let k = this.state.setting;
    console.log(k);
    let bb = this.state.country;
    console.log(bb);

    return (
     
          <div style={{ padding: 40, margin: 40 }}>
            <Grid container xs={12} spacing={1}>
              <Grid item xs={12} align="center">
                <Typography variant="subtitle1" gutterBottom  >
               Provide the following information about your video:
                </Typography>
              </Grid>

              <Grid
                container
                item
                xs={12}
                spacing={2}
                justify="center"
                alignItems="center"
                style={{ marginTop: 16, marginLeft: 250, marginRight: 250 }}
              >
                <React.Fragment>
                  <Grid item xs={12} align="center">
                    <TextField
                      required
                      id="Placename"
                      label="Place name"
                      variant="outlined"
                      placeholder="Madina Station, Al-andalus Mall, etc..."
                      onChange={this.handlePlacenameChange}
                      fullWidth
                      style={{
                        borderRadius: 5,
                      }}
                    />
                  </Grid>
                </React.Fragment>
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
                <React.Fragment>
                  <Grid item xs={6} align="center">
                    <Autocomplete
                      id="combo-box-demo3"
                      options={this.options}
                      getOptionLabel={(option) => option.label}
                      style={{
                        marginBottom: 12,
                        marginTop: 12,
                        borderRadius: 5,
                      }}
                      onInputChange={this.handlecountryChange}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="country"
                          variant="outlined"
                          required
                          fullWidth
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6} align="center">
                    <Autocomplete
                      id="combo-box-demo2"
                      options={n}
                      getOptionLabel={(option) => option.setting}
                      style={{
                        marginBottom: 12,
                        marginTop: 12,
                        borderRadius: 5,
                      }}
                      onInputChange={this.handleOptionSelects}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Setting"
                          variant="outlined"
                          required
                          fullWidth
                        />
                      )}
                    />
                  </Grid>
                </React.Fragment>
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
                <React.Fragment>
                  <Grid item xs={6} align="center">
                    <TextField
                      required
                      id="duration"
                      label="Duration (in seconds)"
                      variant="outlined"
                      type="number"
                      onChange={this.handledurationChange}
                      defaultValue={this.defaultDuration}
                      fullWidth
                      inputProps={{
                        min: 1,
                        style: { textAlign: "center", fontSize: 16 },
                      }}
                    />
                  </Grid>

                  <Grid item xs={6} align="center">
                    <TextField
                      required
                      id="date"
                      type="Date"
                      variant="outlined"
                      label="Date of video"
                      defaultValue="2021-07-17"
                      fullWidth
                      onChange={this.handledateChange}
                      inputProps={{
                        min: 1,
                        style: { textAlign: "center", fontSize: 16 },
                      }}
                    />
                  </Grid>
                </React.Fragment>
              </Grid>

              <Grid
                container
                item
                xs={12}
                spacing={1}
                justify="center"
                alignItems="center"
                style={{ marginTop: 12, marginLeft: 200, marginRight: 200 }}
              >
                <React.Fragment>
                  <Grid item xs={12} align="center">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.sendEmail}
                          onChange={this.handlesendEmailChange}
                          name="sendEmail"
                        />
                      }
                      label="Send me an email when the processing ends"
                    />
                  </Grid>

                  <Grid item xs={12} align="center">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.publish}
                          onChange={this.handlepublishChange}
                          name="publish"
                        />
                      }
                      label="Allow publishing my results in the website datasets"
                    />
                  </Grid>
                </React.Fragment>
              </Grid>

              <Grid item xs={12} align="center">
                <IconButton
                  aria-label="delete"
                  size="medium"
                  variant="contained"
                  onClick={this.onClickBack}
                  style={{
                    color: "#004850",
                    marginRight: 950,
                    marginTop: 30,
                    marginBottom: 30,
                  }}
                >
                  <ArrowBackIcon fontSize="inherit" />
                </IconButton>
              </Grid>
            </Grid>
            <Grid align="center">
            <Button
              color="rgb(255, 255, 255)"
              variant="contained"
              onClick={this.onClickEstimate}
              style={{
                marginBottom: 10,
                width: 200,
                padding: 10,
                border: "1px solid wight",
                borderRadius: "10px",
              }}
            >
              Estimate
            </Button>
            </Grid>
          </div>
       
    );
  }
}