import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';









export default class VideoName extends Component{
 
  
      constructor(props){
         super(props); 
         this.state = {
          video_title: '',
          video_path:'',
  };
  this.handlevideoNameChange = this.handlevideoNameChange.bind(this);
  this.handlevideoPathChange = this.handlevideoPathChange.bind(this);
         this.sendData = this.sendData.bind(this);
         this.onClickNext = this.onClickNext.bind(this);
         this.getInputValue = this.getInputValue.bind(this);
         
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
    
      sendData(){
        this.props.parentCallback([this.state.video_title,this.state.video_path]);
      }
  
      getInputValue(e){
    
        
        this.setState({
          video_path: e.target.files[0],
        });
        
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
          VIDEO NAME AND UPLOADING:
        </Typography>
        </Grid>
  
        <Grid container item xs={12} spacing={1} justify="center" alignItems="center">
                    <React.Fragment>
                
  
                    <Grid item xs={12} align="center">
          <TextField id="video_title"  label="video name" variant="outlined" onChange={this.handlevideoNameChange} />
          </Grid>
  
  
          <Grid item xs={12} justify="center" align="center">
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
        <Button  
        
        variant="contained"  
        color="primary"  
        onClick={this.onClickNext}  
        
      >  
   Done  
      </Button>  
        </div>);
      }
  }