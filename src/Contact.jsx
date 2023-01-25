
import React, { useState } from 'react'

const Contact = () => {

  const [data, setData] = useState({

    fullname: " ",
    phone: " ",
    email: " ",
    msg: " ",

  });


  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}. My mobile no is ${data.phone}. My email is ${data.email} and My message is ${data.msg}`)
  }

  return (
    <>

      <div className="my-5">
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Full Nmae</label>
                <input type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  DefaultValue={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name here" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Mobile number</label>
                <input type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  DefaultValue={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your number" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email Address</label>
                <input type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  DefaultValue={data.email}
                  onChange={InputEvent}
                  placeholder="abc@gmail.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  DefaultValue={data.msg}
                  onChange={InputEvent}>
                </textarea>
              </div>
              <div className="col-12">
              <button className="btn btn-outline-primary" type="submit">Submit form</button>
            </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact
