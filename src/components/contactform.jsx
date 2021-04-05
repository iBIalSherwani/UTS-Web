import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const Box = styled.div`
height: 417px;
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