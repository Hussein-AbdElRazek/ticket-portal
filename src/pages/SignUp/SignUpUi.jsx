import React from 'react'
import { Link, Typography, Box } from '@mui/material'
import { LoadingButton } from '@mui/lab';
import { NavLink } from 'react-router-dom';

import FormCard from '../../components/ui/FormCard'
import FormContainer from '../../components/formik/FormContainer'
import { LoopOnInputs } from '../../helpers/LoopOnInputs';
import { signUpInitialValues, signUpInputs } from './signUpInputsData';
import { signUpValidationSchema } from './signUpValidationSchema';
import SignInUpInIllustration from '../../components/ui/SignInUpInIllustration';
import SignInUpCard from '../../components/ui/SignInUpCard';

const SignUpUi = (props) =>
{
  const { handleSignUp, isLoadingSignUp } = props;
  return (
    <SignInUpCard>
      <FormCard>
        <Typography color="primary" variant="h4" textAlign="center" mb={3}>Sign Up</Typography>
        <FormContainer
          initialValues={signUpInitialValues}
          validationSchema={signUpValidationSchema}
          onSubmit={handleSignUp}
        >
          <LoopOnInputs
            inputs={signUpInputs}
            disabled={isLoadingSignUp} />
          <Box sx={{ width: "100%" }}>
            <LoadingButton
              type="submit"
              variant="contained"
              loading={isLoadingSignUp}
              fullWidth
            >
              Sign Up
            </LoadingButton>
          </Box>

          <Typography variant="body2" mt={2}>
            {"Have an account already? "}
            <Link component={NavLink} to="/user/login">
              Login
            </Link>
          </Typography>
        </FormContainer>
      </FormCard >
      <SignInUpInIllustration/>
    </SignInUpCard>
  )
}

export default SignUpUi