import { useState } from "react";
import "./Contact.css";


function Contact() {


  const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:""
  });


  const [errors,setErrors] = useState({});

  const [success,setSuccess] = useState("");



  function handleChange(e){

    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });

  }



  function validate(){


    let newErrors={};


    if(!formData.name.trim()){

      newErrors.name="Name is required";

    }


    if(!formData.email.includes("@")){

      newErrors.email="Enter a valid email";

    }


    if(formData.message.trim().length < 10){

      newErrors.message=
      "Message must be at least 10 characters";

    }


    return newErrors;

  }




  function handleSubmit(e){

    e.preventDefault();


    const validationErrors=validate();


    if(Object.keys(validationErrors).length > 0){

      setErrors(validationErrors);
      setSuccess("");

    }

    else{

      setErrors({});

      setSuccess(
        "Message sent successfully 🚀"
      );


      setFormData({
        name:"",
        email:"",
        message:""
      });

    }

  }




  return (

    <section id="contact" className="contact-section">


      <h2>
        Get in Touch
      </h2>


      <p>
        Have a project in mind? Let's talk!
      </p>



      <form 
        className="contact-form"
        onSubmit={handleSubmit}
      >



        <div className="form-group">

          <label>
            Name
          </label>

          <input

            type="text"

            name="name"

            value={formData.name}

            onChange={handleChange}

            placeholder="Enter your Name"

          />


          <small>
            {errors.name}
          </small>


        </div>




        <div className="form-group">


          <label>
            Email
          </label>


          <input

            type="email"

            name="email"

            value={formData.email}

            onChange={handleChange}

            placeholder="Enter your Email"

          />


          <small>
            {errors.email}
          </small>


        </div>





        <div className="form-group">


          <label>
            Message
          </label>


          <textarea

            name="message"

            rows="5"

            value={formData.message}

            onChange={handleChange}

            placeholder="Tell About your Idea"

          ></textarea>


          <small>
            {errors.message}
          </small>


        </div>




        <button
          className="btn btn-primary"
          type="submit"
        >

          Send Message 🚀

        </button>



        <button

          className="btn btn-secondary"

          type="reset"

          onClick={() =>
            setFormData({
              name:"",
              email:"",
              message:""
            })
          }

        >

          Reset

        </button>



        {
          success &&

          <p className="success">
            {success}
          </p>

        }



      </form>


    </section>

  );

}


export default Contact;