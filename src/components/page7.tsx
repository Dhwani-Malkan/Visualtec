import { Stack, TextField, Button } from "@mui/material";
import { Form, useForm } from "react-hook-form";
import "./page6-7.css";
import { useState } from "react";
const p6 = './assets/page6.png';

type FormValues = {
  name: string;
  email: string;
  message: string;
}

const page7 = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    }
  });
  const [showPopup, setShowPopup] = useState(false);
  const { register, handleSubmit, formState } = form
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setShowPopup(true);
    const formElement = document.getElementById("form") as HTMLFormElement | null;
    if (formElement) {
      formElement.reset();
    }
  };

  return (
    <Stack className="p7container" direction="column" spacing={0}>
      <br /><hr /><br />
      <div className="p7">
        <div className="p7text"><h2>Let's bring your ideas to life</h2></div><br />
        <form id="form" className="p7form" noValidate onSubmit={handleSubmit(onSubmit)} action="/submit" method="POST">
          <input className="p7input" placeholder="Name" {...register("name", { required: "Please enter Name" })} /><p className="error">{errors.name?.message}</p>
          <input className="p7input" placeholder="Email" {...register("email", { required: "Please enter Email", pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, message: "Please enter a valid Email" } })} /><p className="error">{errors.email?.message}</p>
          <textarea rows={3} className="p7input message" placeholder="Message" {...register("message", { required: "Please enter Message" })} /><p className="error">{errors.message?.message}</p>
          <Button type="submit" className="p7button">Submit</Button>
        </form>
      </div>
      <br />
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-close">
              <button onClick={() => setShowPopup(false)}><a href="#home"> x </a></button>
            </div>
            <h2 className="popup-title">We have received your message</h2>
            <h3 className="popup-subtitle">Thank you! </h3>
            <p className="popup-message">We appreciate you contacting us. One of our team members will get back to you shortly. In the meantime, feel free to explore more about what we do or stay connected with us through our social media channels.</p>
          </div>
        </div>
      )}
    </Stack>
  );
}

export default page7;