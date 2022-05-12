import React, { Component } from 'react';
import './Footer.css'

export default class Footer extends Component {
    render() {
       return (
            <div className='main-footer'>
                <div className='container'>
                    <div className='row'>

                       {/*Column 1 */}
                       <div className='col'>
                           <h4>Crypto-Loans</h4>
                           <ul className='list-unstyled'>
                               <p>Flash Loan consultants dedicated to bringing you quality service and massive returns</p>
                           </ul>
                       </div>

                       {/*Column 2 */}
                       <div className='col'>
                           <h4>Explore</h4>
                           <ul className='list-unstyled'>
                               <li>Home</li>
                               <li>About Us</li>
                               <li>Capabilities</li>
                           </ul>
                       </div>

                       {/*Column 3 */}
                       <div className='col'>
                           <h4>Social Media</h4>
                           <ul className='list-unstyled'>
                               <li>Facebook</li>
                               <li>Instagram</li>
                               <li>Twitter</li>
                           </ul>
                       </div>

                       {/*Column 4 */}
                       <div className='col'>
                           <h4>Support</h4>
                           <ul className='list-unstyled'>
                               <li>Support Request</li>
                               <li>Contact</li>
                           </ul>
                       </div>
                    </div>

                      {/*Footer Bottom */}
                      <br />
                       <div className='row'>
                           <p className='col-sm' align='center'>
                           &copy;{new Date().getFullYear()} Crypto-Loans | All Rights Reserved | Terms Of Service | Privacy Policy
                           </p>
                    </div>
                </div>
            </div>
       ) 
    }
}