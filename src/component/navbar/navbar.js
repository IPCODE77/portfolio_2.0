import { useState } from "react";
import { Nav,ShinyButton, StyledIcon,NavLink, NavbarContainer, NavLogo, ButtonContainer, GitHubButton, MobileIcon, NavItems, MobileMenu, MobileMenuLink } from "./NavBarStyledComponent"
import { FaBarsStaggered as Fabars } from "react-icons/fa6";
import { RxCross2 as CrossIcon } from "react-icons/rx";
import { Bio } from "../../data/constants";




export const Navbar = () => {


    const [open, setopen] = useState(false);
    const [cancel, setcancel] = useState(false);

    const handelIcon =()=>{

        setopen(!open);
        //setcancel(!cancel);
    }
    return (

        <Nav>
            <NavbarContainer>
                <NavLogo to="/"><a style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    marginBottom: "20",
                    cursor: "pointer"
                }}>
                    <StyledIcon size="3rem" /><span>Portfolio</span>
                </a></NavLogo>
                <MobileIcon>

                    {open ? (
                        <>
                            <CrossIcon onClick={handelIcon}></CrossIcon>
                        </>
                    )
                    :
                    (<>
                        <Fabars onClick={handelIcon}></Fabars>
                           
                        </>)}
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education </NavLink>



                </NavItems>
                <ButtonContainer>
                    {/* <GitHubButton>GitHub Profile</GitHubButton> */}
                    <ShinyButton href={Bio.github} target="_blank">GitHub Profile</ShinyButton>;
                </ButtonContainer>

            </NavbarContainer>
            {
                open && (
                    <MobileMenu isOpen={open}>

                        <MobileMenuLink href="#about" onClick={() => { setopen(!open) }}>
                            About
                        </MobileMenuLink>
                        <MobileMenuLink href="#experience" onClick={() => { setopen(!open) }}>
                            Experience
                        </MobileMenuLink>
                        <MobileMenuLink href="#projects" onClick={() => { setopen(!open) }}>
                            Projects
                        </MobileMenuLink>

                        <MobileMenuLink href="#education" onClick={() => { setopen(!open) }}>
                            Education
                        </MobileMenuLink>
                        <GitHubButton href={Bio.github} target="_blank">GitHub Profile</GitHubButton>
                    </MobileMenu>
                )
            }
        </Nav>
    )
}