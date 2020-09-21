import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { Button } from "../../globalStyles"
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavItemBtn,
	NavBtnLink,
	MobileIcon,
} from "./Navbar.elements"

const Navbar = () => {
	const [click, setClick] = useState(false)

	const [button, setButton] = useState(true)

	const showButton = () => {
		window.innerWidth <= 960 ? setButton(false) : setButton(true)
	}

	useEffect(() => {
		showButton()
	}, [])

	window.addEventListener("resize", showButton)

	const handleClick = () => setClick(!click)
	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav>
					<NavbarContainer>
						<NavLogo to='/'>
							<NavIcon />
							ULTRA
						</NavLogo>
						<MobileIcon onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</MobileIcon>
						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<NavLinks to='/'>Home</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks to='/services'>Services</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks to='/products'>Products</NavLinks>
							</NavItem>
							<NavItemBtn>
								{button ? (
									<NavBtnLink to='/sign-up'>
										<Button primary>SIGN UP</Button>
									</NavBtnLink>
								) : (
									<NavBtnLink to='/sign-up'>
										<Button fontBig primary>
											SIGN UP
										</Button>
									</NavBtnLink>
								)}
							</NavItemBtn>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	)
}

export default Navbar
