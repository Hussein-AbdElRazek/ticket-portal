import React from 'react'
import { LoadingButton } from '@mui/lab'
import { Link, Typography, Box, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

import FormContainer from '../../components/formik/FormContainer'
import { loginInitialValues, loginInputs } from './loginInputsData'
import { loginValidationSchema } from './loginValidationSchema'
import SignInUpCard from '../../components/ui/SignInUpCard'
import FormCard from '../../components/ui/FormCard'
import { LoopOnInputs } from '../../helpers/LoopOnInputs'
import SignInUpInIllustration from '../../components/ui/SignInUpInIllustration'
const LoginUi = (props) =>
{
    const { handleLogin, isLoadingLogin, handleOpenForgetPassword } = props;
    return (
        <SignInUpCard>
            <FormCard>
                <Typography color="primary" variant="h4" textAlign="center" mb={5}>Login</Typography>
                <FormContainer
                    initialValues={loginInitialValues}
                    validationSchema={loginValidationSchema}
                    onSubmit={handleLogin}
                >
                    <LoopOnInputs
                        inputs={loginInputs}
                        disabled={isLoadingLogin} />
                    <Box sx={{ width: "100%", textAlign: "right", mb: 3,mt:-3, fontSize: 14 }}>
                        <Button variant="text" onClick={handleOpenForgetPassword} >
                            Forget password?
                        </Button>
                    </Box>

                    <LoadingButton
                        type="submit"
                        variant="contained"
                        fullWidth
                        loading={isLoadingLogin}
                    >
                        Login
                    </LoadingButton>
                    <Typography variant="body2" mt={2}>
                        {"Don't have an account? "}
                        <Link component={NavLink} to="/user/signup">
                            Sign Up
                        </Link>
                    </Typography>
                </FormContainer>
            </FormCard>
            <SignInUpInIllustration />
        </SignInUpCard>
    )
}

export default LoginUi