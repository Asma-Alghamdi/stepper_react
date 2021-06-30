import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Stepper from "react-stepper-horizontal";
import Button from '@material-ui/core/Button'; 
import PersonalInfo from './PersonalInfo';
import VideoName from './VideoName';
import VideoInfo from './VideoInfo';


export default class StepperDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      fname: '',
      personalInfo: [],
      videoname: [],
      videoInfo: [],
      
    };
    this.onClickNext = this.onClickNext.bind(this);
    this.updateCurrent = this.updateCurrent.bind(this);
    this.getStepContent = this.getStepContent.bind(this);
  }

updateCurrent (){
this.setState({
  currentStep: this.state.currentStep +1,
})
}


getStepContent(activeStep){
  switch (activeStep) {  
    case 0:  
      return <PersonalInfo parentCallback = {this.callbackFunction}></PersonalInfo>;  
    case 1:  
      return <VideoName parentCallback = {this.callbackFunction}></VideoName>;  
    case 2:  
      return <VideoInfo parentCallback = {this.callbackFunction}></VideoInfo>;   
    default:  
      return 'Unknown step';  
  }  
}


  onClickNext() {
  this.updateCurrent();
  let t = this.state.currentStep;
  if (t > 2){
    console.log("done");
  }else{ 
    console.log(this.state.videoInfo);
  }
  
  }

  callbackFunction = (childData) => {
    let t = this.state.currentStep;
    switch (t) {  
      case 0:  
        return this.setState({personalInfo: childData});
      case 1:  
        return this.setState({videoname: childData});  
      case 2:  
        return this.setState({videoInfo: childData});  
      default:  
        return 'Unknown step';  
    }  
    
    
}

  render() {
    let activeStep = this.state.currentStep;
    const buttonStyle = { background: '#E0E0E0', width: 200, padding: 16, textAlign: 'center', margin: '0 auto', marginTop: 32 };
    return (
     
      <div>
        <div><p>Asma</p></div>
        <Stepper
          steps={[
            { title: "User Information" },
            { title: "Video Uploading" },
            { title: "Video Information" },
          ]}
          activeStep={this.state.currentStep}
          activeColor= "#FFD966"
          completeColor = "#9A4D4A"
          defaultColor = "#0097A7"
          activeBorderColor ="#FFD966"
          titleTop ={20}
          lineMarginOffset = {20}
          defaultBorderWidth = {10}
        />
             
              <Typography >{this.getStepContent(activeStep)}</Typography>  
              

        <Button  style= {buttonStyle}
                  variant="contained"  
                  color="primary"  
                  onClick={this.onClickNext}  
                  
                >  
             {activeStep === 2 ? 'Estimate' : 'Next'}  
                </Button>  
      </div>
     
    );
  }
}
