import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React from 'react';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

type Props = {
	open: boolean,
	changeAgree: (address: string) => void
	el: any
	setOpen: (address: string) => void
}

const DeleteModal = ({open, changeAgree, el, setOpen}: Props) => {
	return (
		<Modal
			open={open}
			onClose={() => setOpen('')}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h6" component="h2" sx={{color: 'red'}}>
            Delete
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Are you sure you want to delete?
				</Typography>
				<Button sx={{mt: 3, bgcolor: 'red'}} onClick={() => changeAgree(el?.address)} variant="contained">Yes</Button>
				<Button sx={{ml: 3, mt: 3, bgcolor: 'green'}} onClick={() => setOpen('')} variant="contained">No</Button>
			</Box>
		</Modal>
	);
};

export default DeleteModal;
