import Nav from "../Nav";
import ContactForm from "./Form";

const ContactPage = () => {
  return (
    <div>
      <Nav />
      <div className="contact-body">
        <div className="form-container">
          <h1 style={{ fontFamily: "Oxygen", fontWeight: "lighter" }}>
            Contact Me
          </h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
