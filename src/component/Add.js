import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({haz}) {
    const [name, setName] = useState("");
  const [date, setDate] = useState("");
const [type, setType] = useState("");
   const [description, setDescription] = useState("");
   const [rating, setRating] = useState("");
   const [image, setImage] = useState("");
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
     const body = (
    <form style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add Movie</h2>
     
        <label htmlFor="fname"> name:</label><br />
        <input type="text" id="fname" name="fname" defaultValue="" onChange={e => setName(e.target.value)} /><br />
        <label htmlFor="lname">date:</label><br />
        <input type="text" id="lname" name="lname" defaultValue="" onChange={e => setDate(e.target.value)}/><br />
        <label htmlFor="fname">type:</label><br />
        <input type="text" id="fname" name="fname" defaultValue="" onChange={e => setType(e.target.value)}/><br />
        <label htmlFor="fname">description:</label><br />
        <input type="text" id="fname" name="fname" defaultValue="" onChange={e => setDescription(e.target.value)}/><br />
        <label htmlFor="fname">rating:</label><br />
        <input type="number" id="fname" name="fname" defaultValue="" onChange={e => setRating(e.target.value)} min={1} max={5}/><br />
        <label htmlFor="fname">image:</label><br />
        <input type="text" id="fname" name="fname" defaultValue="" onChange={e => setImage(e.target.value)}/><br />
        <br/>
        
        <input type="submit" Value="Submit" onClick={(e)=>{
        e.preventDefault();  
        haz({
            name,
             description,
             type,
             rating,
             image,
             date, 
             id:Math.random()
            });
            
          }} 
            
            />
      </form>
      
    
  );

  return (
    <div>
      <button type="button" onClick={handleOpen} >
        +
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
