import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ContactForm = () => {
  const classes = useStyles();

  return (
    <div className="form">
      <form
        name="contact"
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <input type="hidden" name="form-name" value="contact" />
        <TextField label="Name" name="name" />
        <TextField label="Email" name="email" />
        <TextField label="Message" name="message" multiline />
        <Button id="form-submit" type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
