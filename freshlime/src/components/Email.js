import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import gym from "../images/cta-img.jpg";

export const Email = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_hear: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateForm({ ...formData, [name]: value });
  };

  // Function to validate form
  const validateForm = (data) => {
    const { user_name, user_email, user_hear } = data;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid =
      user_name.trim() !== "" &&
      emailPattern.test(user_email) &&
      user_hear.trim() !== "";
    setIsFormValid(isValid);

    // Set error message if any field is missing
    if (!isValid) {
      setErrorMessage("Please fill out all fields.");
    } else {
      setErrorMessage("");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return; // Prevent submission if form is invalid
    }

    emailjs
      .sendForm(
        "service_7s2hlon", // Service ID
        "template_hfgq3up", // Template ID
        form.current,
        "wFzPi2R76_p2XCZ28" // Public Key (User ID)
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent successfully!");
          e.target.reset(); // Reset form after successful submission
          setFormData({ user_name: "", user_email: "", user_hear: "" }); // Reset state
          setIsFormValid(false); // Reset form validation state
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <div className="flex justify-center bg-gradient-to-r from-[#52a58c] to-[#087f5b] mx-40 mt-[10rem] rounded-xl">
      <div className="text-left p-12 flex-2">
        <p className="font-[700] text-[3.5rem] leading-[3.2rem]">
          Get your first week for free
        </p>
        <p className="text-[18px] my-[2rem]">
          A lot and all kinds of hummers waiting for you. Start working out
          today, make your best shape as possible, stay healthy and active with
          us!
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col justify-center items-center gap-4 flex-2 px-2"
        >
          <div className="flex text-left gap-6 w-full">
            <div className="flex flex-col w-[50%]">
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                className="bg-[#b5d9ce] rounded-[9px] p-2 my-2"
                required
              />
            </div>
            <div className="flex flex-col flex-1 w-[50%]">
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                className="bg-[#b5d9ce] rounded-[9px] p-2 my-2"
                required
              />
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center gap-6 w-full">
            <div className="my-2 flex flex-1 flex-col gap-2 w-full">
              <label className="text-[8px] font-[700]">
                Where did you hear from us?
              </label>
              <select
                name="user_hear"
                value={formData.user_hear}
                onChange={handleChange}
                className="pl-2 pr-6 bg-[#b5d9ce]"
                required
              >
                <option value="">Please Choose one option:</option>
                <option value="family">Friends and Family</option>
                <option value="youtube">Youtube video</option>
                <option value="podcast">Podcast</option>
                <option value="facebook">Facebook ad</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="w-full flex-1">
              <button
                type="submit"
                disabled={!isFormValid}
                className="bg-[#02261b] px-16 py-2 text-white rounded-[8px] text-[18px] w-full"
              >
                Sign up now
              </button>
            </div>
          </div>
          {/* Display error message */}
          {errorMessage && (
            <p className="text-red-600 text-center mt-4">{errorMessage}</p>
          )}
        </form>
      </div>
      <img src={gym} alt="gym" className="w-1/3 rounded-r-xl flex-1"></img>
    </div>
  );
};

export default Email;
