import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';







const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default class VideoInfo extends Component{

  
      constructor(props){
         super(props); 
         this.state = {
          
          Placename: '',
          setting: '',
          country:'' ,
          city: '',
          duration: this.defaultDuration,
          date: '',
          sendEmail: false ,
          publish: false,
         };
         
         this.handlePlacenameChange = this.handlePlacenameChange.bind(this);
         this.handlesettingChange = this.handlesettingChange.bind(this);
         this.handlecountryChange = this.handlecountryChange.bind(this);
         this.handlecityChange = this.handlecityChange.bind(this);
         this.handledurationChange = this.handledurationChange.bind(this);
         this.handledateChange = this.handledateChange.bind(this);
         this.handlesendEmailChange = this.handlesendEmailChange.bind(this);
         this.handlepublishChange = this.handlepublishChange.bind(this);
         this.sendData = this.sendData.bind(this);
         this.onClickNext = this.onClickNext.bind(this);
         
        
         
         
      }


  
      handlePlacenameChange (e){
        this.setState({
          Placename: e.target.value,
        });
      }
      
      handlesettingChange (e){
        this.setState({
          setting: e.target.value,
        });
      }
  
      handlecountryChange (e){
        this.setState({
          country: e.target.value,
        });
      }
  
      handlecityChange (e){
        this.setState({
          city: e.target.value,
        });
      }
  
      handledurationChange (e){
        this.setState({
          duration: e.target.value,
        });
      }
  
      handledateChange (e){
        this.setState({
          date: e.target.value,
        });
      }
  
  
      handlesendEmailChange (e){
        this.setState({
          sendEmail: e.target.value === "false" ? false : true,
        });
      }
  
      handlepublishChange (e){
        this.setState({
          publish: e.target.value === "false" ? false : true,
        });
      }


      sendData(){
        this.props.parentCallback([this.state.Placename,this.state.setting,this.state.country,this.state.city,this.state.duration,this.state.date,this.state.sendEmail,this.state.publish]);
      }
  
  
      
      onClickNext() {
       this.sendData();
          
        }
      
     
      render(){
        const buttonStyle = { background: '#E0E0E0', width: 200, padding: 16, textAlign: 'center', margin: '0 auto', marginTop: 32 };
  
  
          return (
  
            
            <div style={{ padding: 40, margin:40 }}>
              
  
          
  
          <Grid container spacing={1}>
  
         
         
        <Grid item xs={12} align="center">
          <Typography variant="subtitle1" gutterBottom>
          VIDEO INFORMATION: 
        </Typography>
        </Grid>
  
        <Grid container item xs={12} spacing={1} justify="center" alignItems="center">
                    <React.Fragment>
                
  
                    <Grid item xs={2} align="center">
          <TextField id="Placename" label="Place name" variant="outlined" placeholder="Madina Station, Al-andalus Mall, etc..." onChange={this.handlePlacenameChange}/>
          </Grid>        
  
          <Grid item xs={2} align="center">
          <TextField id="setting" label="Setting" variant="outlined" placeholder="Public place or Mass gathering?" onChange={this.handlesettingChange}/>
          </Grid>
          
          <Grid item xs={2} align="center">
          <TextField id="country" label="Country" variant="outlined" placeholder="Saudi Arabia, Jorden, Egypt, etc..." onChange={this.handlecountryChange}/>
          </Grid>
  
          
          
              
                
              </React.Fragment>
              </Grid>
  
              <Grid container item xs={12} spacing={1} justify="center" alignItems="center">
                    <React.Fragment>
                    <Grid item xs={2} align="center" >
          <TextField id="city" label="City" variant="outlined" placeholder="Jeddah, Makkah, etc..." onChange={this.handlecityChange}/>
          </Grid>
  
          <Grid item xs={2} align="center">
          <TextField id="duration" label="Duration (sec)" variant="outlined" helperText="in seconds" required={true} type="number" onChange={this.handledurationChange} defaultValue={this.defaultDuration} inputProps={{
                  min: 1,
                  style: { textAlign: "center" },
                }}/>
          </Grid>
  
          <Grid item xs={2} align="center">
          <TextField id="date" type="Date"  variant="outlined" helperText="choose date of video" onChange={this.handledateChange}/>
          </Grid>
                    </React.Fragment>
              </Grid>
  
  
              <Grid item xs={12} align="center">
              <div style={{ paddingBottom: 70, paddingTop: 30}}>
        <Divider variant="inset"   /> 
        </div>
        </Grid>
  
              <Grid container item xs={12} spacing={1} justify="center" alignItems="center">
                    <React.Fragment>
                    <Grid item xs={12} align="center">
                  <FormControlLabel
                  control={<GreenCheckbox onChange={this.handlesendEmailChange} name="sendEmail" />}
                  label="Send me an email when the processing ends"
              />
              </Grid>
  
              <Grid item xs={12} align="center">
                  <FormControlLabel
                  control={<GreenCheckbox onChange={this.handlesendpublishChange} name="publish" />}
                  label="Allow publishing my results in the website datasets"
              />
              </Grid>
                    </React.Fragment>
              </Grid>
              
  
          <Grid item xs={12} align="center">
          
            <Button
              color="primary"
              variant="contained"
              onClick={this.onClickNext}
              path = "/Result"
            >
              Done
            </Button>
           
          </Grid>
          
          
        </Grid>
        </div>);
      }
  }