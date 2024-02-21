import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <Button onClick={handleOpen}><EditIcon/></Button>
      {open && <Modal
        open={open}
        onClose={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TextField id="outlined-basic" label="Company" variant="outlined" required />
        <TextField required id="outlined-basic" label="Address" variant="outlined" />
        <TextField id="outlined-basic" label="Image URL" variant="outlined" />
        </Box>
      </Modal>}
    </div>
  );
}