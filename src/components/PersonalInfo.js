import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';




// Two types of React Components
// 1) Class Components + constructor(props)
// export default class Personalinfo extends Component {};
//
// 2) Functional Components + hooks(props)
// export default PersonalInfo = () => {};
//

export default class PersonalInfo extends Component{

  
      constructor(props){
         super(props); 
        this.state = {
          fname: '', 
          lname: '',
          email: '',
 
         };
         this.handlefnameChange = this.handlefnameChange.bind(this);
         this.handlelnameChange = this.handlelnameChange.bind(this);
         this.handleemailChange = this.handleemailChange.bind(this);
         this.sendData = this.sendData.bind(this);
         this.onClickNext = this.onClickNext.bind(this);
         
         
         
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

      sendData(){
        this.props.parentCallback([this.state.fname,this.state.lname,this.state.email]);
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
          PERSONAL INFORMATION:
        </Typography>
        </Grid>
  
        <Grid container item xs={12} spacing={1} justify="center" alignItems="center">
                    <React.Fragment>
                
  
                <Grid item xs={2} align="center">
          <TextField id="fname" label="first name" variant="outlined" onChange={this.handlefnameChange} />
          </Grid>
  
          <Grid item xs={2} align="center">
          <TextField id="lname" label="last name" variant="outlined" onChange={this.handlelnameChange} />
          </Grid>
         
          <Grid item xs={2} align="center">
          <TextField id="email" label="email" variant="outlined" onChange={this.handleemailChange}/>
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