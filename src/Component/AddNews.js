import React, { useState, useEffect } from 'react'
import { Modal, IconButton, Backdrop, Grid, Slide, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import SimpleSelect from './SimpleSelect'
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        minWidth: "1000px",
        width: "52%",
        flexDirection: "row",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    select: {
        minWidth: 140,
        padding: 15,
    }
}));
const Model = (props) => {
    const classes = useStyles();
    const [val, setVal] = useState();
    const [obj, setObj] = useState();
    const [name, setName] = useState('Report Not Selected Yet');
    const { modelOpen, handleModel } = props
    let [, setState] = useState();

    const cancel = () => {
        handleModel(false);
    }

    const handleChange = (val) => {
        console.log(val);
        setVal(val)

    }

    const fileHandler = (event) => {

        if (event.target.files[0]) {
            let fileobj = event.target.files[0];
            console.log(fileobj.name)
            setName(fileobj.name);
            setObj(fileobj);

            console.log(event)
            console.log(obj)
           
        } else {
            alert('there is no file')
        }

    }

    const submit = () => {
        
    }





    useEffect(() => {
        console.log("**")
    }, []);



    const View =
        <Container style={{ alignItems: 'center' }}>
            <ToastContainer
                position='top-right'
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                autoClose={4000}
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover>
            </ToastContainer>
            <Grid container style={{ marginBottom: '2%' }}>
                <Grid item xs={12} style={{ marginTop: '-20%', marginLeft: '5%' }}>
                    <Typography display="block" style={{ fontFamily: 'uiRounded' }}>
                        Add News
                    </Typography>
                </Grid>
            </Grid>

        </Container>


    return (
        <Modal
            className={classes.modal}
            open={modelOpen}
            onClose={() => handleModel(false)}
            closeAfterTransition

            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}>
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                <div className={`${classes.paper} modalContainer`} style={{ height: "45%", overflow: "auto", minWidth: '500px', alignItems: 'center' }}>
                    {View}
                </div>
            </Slide>
        </Modal>
    )
}
export default Model;