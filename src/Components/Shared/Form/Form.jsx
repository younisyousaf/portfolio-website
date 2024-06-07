import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight } from "react-bootstrap-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState({
    name: true,
    email: true,
    message: true,
  });

  const validateForm = () => {
    const isValidated =
      name.trim() !== "" && email.trim() !== "@" && message.trim() !== "";
    setIsValid({
      ...isValid,
      name: name.trim() !== "",
      email: email.trim() !== "@",
      message: message.trim() !== "",
    });
    return isValidated;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      toast.error("All fields are required");
      setLoading(false);
      return; // Exit the function early if validation fails
    }

    emailjs
      .sendForm(
       "service_1d0uvtz",
      "template_rd6gc9o",

        e.target,
        "L0Zcl7HHUQQf1M1yn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          toast.success("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <div className="replay__box cmn__bg">
        <h3>Leave a Reply</h3>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <form onSubmit={handleSubmit} className="row g-4">
          <div className="col-lg-12">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ borderColor: isValid.name ? "" : "red" }} // Highlight invalid input
            />
          </div>
          <div className="col-lg-12">
            <input
              type="email"
              name="from_email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderColor: isValid.email ? "" : "red" }} // Highlight invalid input
            />
          </div>
          <div className="col-lg-12">
            <textarea
              name="message"
              rows="5"
              placeholder="Write Comments"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ borderColor: isValid.message ? "" : "red" }} // Highlight invalid input
            ></textarea>
          </div>
          <button
            type="submit"
            className="d-flex fw-500 cmn--btn align-items-center gap-2"
            disabled={
              loading || !isValid.name || !isValid.email || !isValid.message
            }
          >
            <span className="get__text">
              {loading ? "Sending..." : "Submit Comment"}
            </span>
            <span>
              <i className=" fz-20">
                {" "}
                <ArrowRight />{" "}
              </i>
            </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
