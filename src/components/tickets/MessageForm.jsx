import { Box, IconButton, InputBase, CircularProgress } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import SendIcon from '@mui/icons-material/Send';
const MessageForm = (props) =>
{
    const { onSubmit, isLoading, placeholder } = props;
    return (
        <Formik
            initialValues={{
                message: ""
            }}
            onSubmit={onSubmit}
        >
            {(formik) => (
                <Form>
                    <Box sx={{
                        position: "fixed",
                        bottom: 0,
                        right: 0,
                        backgroundColor: "grey",
                        minHeight: "44.5px",
                        width: "calc(100% - 540px)",
                        display: "flex",
                        alignItems: "center",
                        paddingX: "20px",
                        paddingY: "10px",
                        overflowX: "auto",
                        "@media (max-width:890px)": {
                            width: "calc(100% - 40px)",
                            zIndex: 9999,
                        },
                    }}>
                        <Field name="message" >
                            {({ field }) => (
                                <InputBase
                                    disabled={false}
                                    autoFocus
                                    multiline
                                    maxRows={10}
                                    name="message"
                                    id="message"
                                    sx={{
                                        minHeight: "40px",
                                        width: "94%",
                                        backgroundColor: "white",
                                        padding: "10px",
                                        borderRadius: "5px",
                                        marginRight: "10px"
                                    }} 
                                    placeholder={placeholder}
                                    {...field}
                                />
                            )}
                        </Field>

                        {(formik.values.message.trim() !== "" && !isLoading) && (
                            <IconButton sx={{  color: "white" }}  type="submit">
                                <SendIcon />
                            </IconButton>
                        )}
                        {isLoading && (
                            <CircularProgress sx={{ ml: 1, color:"white" }} size={25} />
                        )}

                    </Box>
                </Form>
            )}
        </Formik>

    )
}

export default MessageForm