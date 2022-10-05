import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


// properties addCoure is required, function called when Add clicked.
class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false, course:{ } };
      };
      handleClickOpen = () => {
        this.setState( {open:true} );
      };
  
      handleClose = () => {
        this.setState( {open:false} );
      };
  
      handleChange = (event) => {
        this.setState({student:{email: document.getElementById("email").value,
                                name: document.getElementById("name").value,
                                status_code:document.getElementById("status_code").value}});
      }
  
    // Save course and close modal form
      handleAdd = () => {
         this.props.addStudent(this.state.student);
         this.handleClose();
      }

    render()  { 
      return (
          <div>
            <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
              Add Student
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Add Course</DialogTitle>
                <DialogContent  style={{paddingTop: 20}} >
                  <TextField autoFocus fullWidth id = "email" label="Student email" name="email" onChange={this.handleChange}  /> 
                  <TextField autoFocus fullWidth id = "name" label="Student name" name="name" onChange={this.handleChange}  /> 
                  <TextField autoFocus fullWidth id = "status_code" label="Student status code" name="status_code" onChange={this.handleChange}  /> 
                </DialogContent>
                <DialogActions>
                  <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                  <Button id="Add" color="primary" onClick={this.handleAdd}>Add</Button>
                </DialogActions>
              </Dialog>   
          </div>
      ); 
    }
}

// required property:  addCourse is a function to call to perform the Add action
// AddCourse.propTypes = {
//   addCourse : PropTypes.func.isRequired
// }

export default AddStudent;