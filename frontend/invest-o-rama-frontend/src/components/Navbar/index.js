import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/about" activeStyle>
						About Invest-o-Rama
					</NavLink>
					<NavLink to="/contact" activeStyle>
						About Us
					</NavLink>
					<NavLink to="/blogs" activeStyle>
						Blogs To Help You Get Started
					</NavLink>
					<NavLink to="/sign-up" activeStyle>
						Sign Up Now!
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
