import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
       return (
        <div class='card border-dark text-white bg-dark mb3'>
                <div class='card-footer'>
                    <Container>
                    <div className='row'>

{/* Column 1 */}
<div className='col-md-3 col-sm-6'>
    <h4>Crypto-Loan</h4>
    <p>Generic Slogan</p>
</div>
{/* Column 2 */}
<div className='col-md-3 col-sm-6'>
    <h4>Explore</h4>
    <ul className='list-unstyled'>
        <li>Home</li>
        <li>About Us</li>
        <li>Capabilities</li>
    </ul>
</div>
{/* Column 3 */}
<div className='col-md-3 col-sm-6'>
    <h4>Social Media</h4>
    <ul className='list-unstyled'>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
    </ul>
</div>
{/* Column 4 */}
<div className='col-md-3 col-sm-6'>
    <h4>Support</h4>
    <ul className='list-unstyled'>
        <li>Support Request</li>
        <li>Contact</li>
    </ul>
</div>
</div>
{/*footer Bottom */}
<br />
<div className='footer-bottom'>
<p className='text-xs-center'>
    &copy;{new Date().getFullYear()} Crypto-Loans | All Rights Reserved | Terms Of Service | Privacy
</p>
</div>
                     </Container>
                </div>
            </div>
       ) 
    }
}