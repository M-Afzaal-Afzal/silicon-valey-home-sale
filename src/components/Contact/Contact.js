import React from 'react';
import TextWithDivider from "../Common/TextWithDivider";
import {
    Box,
    Container,
    Grid,
    TextField,
    makeStyles,
    Typography,
    Button,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import {useForm, Controller} from "react-hook-form";
import {useSnackbar} from 'notistack';

const useStyles = makeStyles(theme => ({
    contact: {
        margin: '4.5rem 0'
    },
    textWithDividerContainer: {
        marginBottom: '4.5rem',
    },
    contactText: {
        fontSize: '1.3rem',
        lineHeight: '1.7',
        fontWeight: 'normal',
    },
    textFieldContainer: {
        marginBottom: '1rem',
    },
    textField: {
        borderRadius: 0,
        border: '1px solid #1c1c1c'
    },
    submitBtn: {
        borderRadius: 0,
        fontSize: '1.3rem',
        color:'white',
        padding: '.5rem 3rem',
        background: '#242424',
        '&:hover': {
            background: '#1c1c1c'
        }
    }
}));

const Contact = () => {

    const classes = useStyles();

    const {enqueueSnackbar} = useSnackbar();

    const {control, reset, handleSubmit, formState: {errors}} = useForm();
    const theme = useTheme();

    const isSmallerThanSm = useMediaQuery(theme.breakpoints.down('sm'));

    const onSubmit = ({name, email, phone, message}) => {
        // here is your data of the form input do what ever you want with it
        console.log(name, email, phone, message)

        // success message when message sent successfully

        enqueueSnackbar("Message sent successfully!!!", {
            variant: 'success',
        });

        //    reset after sending the message

        reset({
            name: '',
            email: '',
            message: '',
            phone: ''
        })

        //     for error

        //     enqueueSnackbar("Error while sending the message!!!", {
        //         variant: 'error',
        //     });
    };


    return (
        <Box className={classes.contact} id={'contact'}>
            <Container maxWidth={'lg'}>

                <Box className={classes.textWithDividerContainer}>
                    <TextWithDivider>
                        Contact
                    </TextWithDivider>
                </Box>

                <Grid spacing={8} justify={'center'} style={{width: '100%'}} container>

                    <Grid item md={6} style={{width: '100%',textAlign: isSmallerThanSm ? 'center': 'left'}}>
                        <Typography variant={'h6'} className={classes.contactText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur consequuntur
                            cupiditate debitis dicta error et labore magnam nesciunt nisi optio quasi quidem, quod
                            repellat repellendus, unde veniam vitae, voluptas?
                        </Typography>
                    </Grid>

                    <Grid item md={6} style={{width: '100%'}}>
                        <form style={{width: '100%'}} onSubmit={handleSubmit(onSubmit)}>

                            <Box style={{maxWidth: '30rem', margin: 'auto'}}>

                                <Box className={classes.textFieldContainer}>
                                    <Controller
                                        name="name"
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'You must have to specify your name!!!'
                                            }
                                        }}
                                        render={({field}) => (
                                            <TextField
                                                id="name"
                                                name="name"
                                                label="Name"
                                                error={!!errors?.name}
                                                fullWidth
                                                variant={'filled'}
                                                color={'primary'}
                                                style={{background: 'white'}}
                                                className={classes.textField}
                                                helperText={errors?.name ? errors.name.message : null}
                                                {...field}
                                            />
                                        )}
                                    />
                                </Box>

                                <Box className={classes.textFieldContainer}>
                                    <Controller
                                        name="email"
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'You must have to specify your email!!!'
                                            }, pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: 'Please enter correct email!!!'
                                            }
                                        }}
                                        render={({field}) => (
                                            <TextField
                                                id="email"
                                                label="Email"
                                                name="email"
                                                error={!!errors?.email}
                                                fullWidth
                                                variant={'filled'}
                                                color={'primary'}
                                                style={{background: 'white'}}
                                                helperText={errors?.email ? errors.email.message : null}
                                                className={classes.textField}
                                                {...field}
                                            />
                                        )}
                                    />
                                </Box>

                                <Box className={classes.textFieldContainer}>
                                    <Controller
                                        name="phone"
                                        control={control}
                                        type={'number'}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'You must have to specify your phone number!!!'
                                            }
                                        }}
                                        defaultValue=""
                                        render={({field}) => (
                                            <TextField
                                                name="phone"
                                                id="phone"
                                                type={'tel'}
                                                label="Phone"
                                                error={!!errors?.phone}
                                                fullWidth
                                                variant={'filled'}
                                                color={'primary'}
                                                style={{background: 'white'}}
                                                className={classes.textField}
                                                helperText={errors?.phone ? errors.phone.message : null}
                                                {...field}
                                            />
                                        )}
                                    />
                                </Box>

                                <Box className={classes.textFieldContainer}>
                                    <Controller
                                        name="message"
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'You must have to specify your phone message!!!'
                                            }
                                        }}
                                        render={({field}) => (
                                            <TextField
                                                name="message"
                                                id="message"
                                                label="Message"
                                                error={!!errors?.message}
                                                fullWidth
                                                multiline
                                                rows={5}
                                                rowsMax={5}
                                                variant={'filled'}
                                                color={'primary'}
                                                style={{background: 'white'}}
                                                className={classes.textField}
                                                helperText={errors?.message ? errors.message.message : null}
                                                {...field}
                                            />
                                        )}
                                    />
                                </Box>

                                <Box style={{display: 'flex', justifyContent: 'flex-start'}}>
                                    <Button type={'submit'} className={classes.submitBtn} size={'large'}
                                            variant={'contained'}
                                    >
                                        Submit
                                    </Button>
                                </Box>

                            </Box>
                        </form>


                    </Grid>

                </Grid>

            </Container>
        </Box>
    );
};

export default Contact;