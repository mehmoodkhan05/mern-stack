import { Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from "@mui/material";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 50px auto;
  & > div {
    margin-top: 25px;
    & > button {
      width: 125px;
      margin: auto
    }
  }
`

const AddUser = () => {
  return (
    <>
      <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <InputLabel>User Name</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <InputLabel>Contact</InputLabel>
          <Input />
        </FormControl>
        <FormControl>
          <Button variant="contained">Add User</Button>
        </FormControl>
      </Container>
    </>
  );
};

export default AddUser;
