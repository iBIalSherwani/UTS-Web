import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const Box = styled.div`
background: linear-gradient(156deg, rgba(0,212,255,1) 0%, rgba(2,159,220,1) 10%, rgba(4,118,193,1) 27%, rgba(5,87,172,1) 42%, rgba(8,38,140,1) 58%, rgba(24,9,121,1) 83%);
height: 100%;
width: 100%;
`


const  contactForm = () => {
return (
<Box> 
<h3>Contact Form</h3>

<div class="container">
  <form action="/action_page.php">
    <label for="fname">First Name   </label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

    <label for="lname">Last Name </label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

    <input type="submit" value="Submit" />
                    </form>
                </div>

            </Box>
        );
    }

export default contactForm;