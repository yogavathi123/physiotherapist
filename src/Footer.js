// Filename - components/Footer.js

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading}
    from "./FooterStyles.js";
    import { faLocationArrow, faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
	return (
		<Box>
		
		
			<FooterContainer>
				<Row>
					<Column>
                    <div className="address">
                    <center><FontAwesomeIcon icon={faLocationArrow} style={{ marginRight: '5px' }} />
          <span> Address : K.Pudur,Madurai- 625007</span> </center>
        </div>
					</Column>
					<Column>
                    <div className="phone-number">
         <center> <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
          <span> Phone : 7708317381</span> </center>
        </div>
					</Column>
					<Column>
                    <div className="email-address">
                    <center> <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} /> 
            <span> Email : muhthar2001@gmail.com </span></center>
          </div>
					</Column>
					
				</Row>
                <div></div>
			</FooterContainer>
          
		</Box>
	);
};
export default Footer;
