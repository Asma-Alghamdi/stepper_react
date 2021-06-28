import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router';
import crowd from './crowd.png';
import information from './information.png';
import resolation from './resolation.png';
import duration from './duration.png';
import { spacing } from '@material-ui/system';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));



const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default class UploadPage extends Component{
 
  defaultDuration = 900;


    constructor(props){
       super(props); 
      this.state = {
        fname: '', 
        lname: '',
        email: '',
        Placename: '',
        
        setting: '',
        country:'' ,
        city: '',
        duration: this.defaultDuration,
        date: '',
        video_title: '',
        video_path:'',
        

        sendEmail: false ,
        publish: false,
       
       };
       this.handlefnameChange = this.handlefnameChange.bind(this);
       this.handlelnameChange = this.handlelnameChange.bind(this);
       this.handleemailChange = this.handleemailChange.bind(this);
       this.handlePlacenameChange = this.handlePlacenameChange.bind(this);
       
       this.handlesettingChange = this.handlesettingChange.bind(this);
       this.handlecountryChange = this.handlecountryChange.bind(this);
       this.handlecityChange = this.handlecityChange.bind(this);
       this.handledurationChange = this.handledurationChange.bind(this);
       this.handledateChange = this.handledateChange.bind(this);
       this.handlevideoNameChange = this.handlevideoNameChange.bind(this);
       this.handlevideoPathChange = this.handlevideoPathChange.bind(this);
       this.handlesendEmailChange = this.handlesendEmailChange.bind(this);
       this.handlepublishChange = this.handlepublishChange.bind(this);
       this.handleEstimateButtonPressed= this.handleEstimateButtonPressed.bind(this);
       this.getInputValue = this.getInputValue.bind(this);
       
       
    }
    
    handlefnameChange (e){
      this.setState({
        fname: e.target.value,
      });
    }

    handlelnameChange (e){
      this.setState({
        lname: e.target.value,
      });
    }

    handleemailChange (e){
      this.setState({
        email: e.target.value,
      });
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

    handlevideoNameChange (e){
      this.setState({
        video_title: e.target.value,
      });
    }

    handlevideoPathChange (e){
      this.setState({
        video_path: e.target.value,
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

   getInputValue(e){
    
    //blobImage = URL.createObjectURL(blobImage)
    this.setState({
      video_path: e.target.files[0],
    });
    
  }

    
    handleEstimateButtonPressed(){
     


    
    } 

    

    render(){
      const buttonStyle = { background: '#E0E0E0', width: 200, padding: 16, textAlign: 'center', margin: '0 auto', marginTop: 32 };


        return (

          
          <div style={{ padding: 40, margin:40 }}>
            

          <Grid container  direction="row" justify="center" alignItems="center"spacing={1}>
          <div style={{ padding: 40, margin:40 }}>

          <div style={{ paddingBottom: 20, color: "#595959"}}>
          <Grid item xs={12} align="center">
          <Typography className="font-weight-bold" component="h4" variant="h4" >
          VIDEO SPECIFICATIONS
          </Typography>
        </Grid>
        </div>

            <Grid container item xs={12} spacing={3}>
                  <React.Fragment>
              <Grid item xs={3} align="center">
              <img src={duration} alt="duration" width="100 px" height="100 px" />
              </Grid>
              <Grid item xs={3} align="center">
              <img src={resolation} alt="resolation" width="100 px" height="100 px" />
              </Grid>
              <Grid item xs={3} align="center">
              <img src={information} alt="information" width="100 px" height="100 px" />
              </Grid>
              <Grid item xs={3} align="center">
              <img src={crowd} alt="crowd" width="100 px" height="100 px" />
              </Grid>
            </React.Fragment>
            </Grid>
            <Grid container item xs={12} spacing={3}>
                  <React.Fragment>
              <Grid item xs={3} align="center">
                <h4 style={{ color: "#595959"}}>DURATION</h4>
              </Grid>
              <Grid item xs={3} align="center">
              <h4 style={{ color: "#595959"}}>QUALITY</h4>
              </Grid>
              <Grid item xs={3} align="center">
              <h4 style={{ color: "#595959"}}>INFORMATION</h4>
              </Grid>
              <Grid item xs={3} align="center">
              <h4 style={{ color: "#595959"}}>CROWD TYPE</h4>
              </Grid>
            </React.Fragment>
            </Grid>
            <Grid container item xs={12} spacing={3}>
                  <React.Fragment>
              <Grid item xs={3} align="center">
              The video should be 15 min or more
              </Grid>
              <Grid item xs={3} align="center">
              360p, 480p, 720p quality
              </Grid>
              <Grid item xs={3} align="center">
              Provide the required information
              </Grid>
              <Grid item xs={3} align="center">
              Spares crowd type is accepted
              
              </Grid>
            </React.Fragment>
            </Grid>
            </div>
          </Grid>

        <Grid container spacing={1}>

        
     
       


   

       

     
            
            

        
        
        
      </Grid>
      </div>);
    }
}