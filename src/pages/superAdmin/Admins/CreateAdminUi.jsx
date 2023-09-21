import { Box, Paper } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import FormContainer from '../../../components/formik/FormContainer'
import { createAdminInitialValues, createAdminInputs } from './createAdminInputsData'
import { createAdminValidationSchema } from './createAdminValidationSchema'
import { LoopOnInputs } from '../../../helpers/LoopOnInputs'
const CreateAdminUi = (props) =>
{
    const { handleCreateAdmin, isLoadingCreateAdmin } = props;
    return (
        <FormContainer
            initialValues={createAdminInitialValues}
            validationSchema={createAdminValidationSchema}
            onSubmit={handleCreateAdmin}
        >
            <Paper
                variant="outlined"
                sx={{ m: 2, p: 5, width: "500px", margin: "auto" }}
            >
                <LoopOnInputs
                    inputs={createAdminInputs}
                    disabled={isLoadingCreateAdmin}
                />
                <Box sx={{ width: "100%", textAlign: "center" }}>
                    <LoadingButton
                        type="submit"
                        variant="contained"
                        loading={isLoadingCreateAdmin}
                        disabled={isLoadingCreateAdmin}
                    >
                        Create Admin
                    </LoadingButton>
                </Box>
            </Paper>

        </FormContainer>
    )
}

export default CreateAdminUi