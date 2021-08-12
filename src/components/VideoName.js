import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default class VideoName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video_title: "",
      video_path: "",
    };
    this.handlevideoNameChange = this.handlevideoNameChange.bind(this);
    this.sendData = this.sendData.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickback = this.onClickback.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
  }

  ////////////////////////////////////////// Handle the changes //////////////////////////////////////////

  handlevideoNameChange(e) {
    this.setState({
      video_title: e.target.value,
    });
  }

  getInputValue(e) {
    this.setState({
      video_path: e.target.files[0],
    });
  }

  ////////////////////////////// Pass data to the parent component & move to the next or previous page //////////////////////////////

  sendData(counter) {
    this.props.parentCallback([
      this.state.video_title,
      this.state.video_path,
      counter,
    ]);
  }

  onClickNext() {
    this.sendData(1);
  }

  onClickback() {
    this.sendData(0);
  }
  ////////////////////////////// Rendering //////////////////////////////

  render() {
    return (
      <div style={{ padding: 40, margin: 40 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} align="center">
            <Typography variant="subtitle1" gutterBottom>
              Upload your video along with its title:
            </Typography>
          </Grid>

          <Grid
            container
            item
            xs={12}
            spacing={1}
            justify="center"
            alignItems="center"
            style={{ marginTop: 12, marginLeft: 250, marginRight: 250 }}
          >
            <React.Fragment>
              <Grid item xs={12} align="center">
                <TextField
                  required
                  fullWidth
                  id="video_title"
                  label="video name"
                  variant="outlined"
                  onChange={this.handlevideoNameChange}
                />
              </Grid>

              <Grid
                item
                xs={12}
                justify="center"
                align="center"
                style={{ marginTop: 15 }}
              >
                <input
                  accept="video/*"
                  id="contained-button-file"
                  type="file"
                  onChange={this.getInputValue}
                />
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          spacing={1}
          style={{
            marginTop: 30,
            marginBottom: 30,
            paddingRight: 140,
            paddingLeft: 130,
          }}
        >
          <React.Fragment>
            <Grid item xs={6} align="left">
              <IconButton
                aria-label="delete"
                size="medium"
                variant="contained"
                onClick={this.onClickback}
                style={{
                  color: "#004850",
                }}
              >
                <ArrowBackIcon fontSize="inherit" />
              </IconButton>
            </Grid>

            <Grid item xs={6} align="right">
              <IconButton
                aria-label="Next arrow"
                size="medium"
                variant="contained"
                onClick={this.onClickNext}
                style={{
                  color: "#004850",
                }}
              >
                <ArrowForwardOutlinedIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          </React.Fragment>
        </Grid>
      </div>
    );
  }
}
