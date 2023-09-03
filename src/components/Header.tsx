import Logo from "./Logo.tsx";
import Nav from "./Nav.tsx";
import NavToggleBtn from "./NavToggleBtn.tsx";
import styled from "styled-components";


function Header(){

	const HeaderContainer = styled.div`
		position:fixed;top:0;width:100%;
		
		@media (min-width:1124px){
			padding:70px 0 20px;transition:padding-top ease-in 0.5s;
			&.scroll{padding:20px 0;}
		}
	`;

	const HeaderInner = styled.div`
		position:relative;
		.header_container.nav_open &{background-color:#fff;}
	
		@media (min-width:1124px){
			display:flex;align-items:center;justify-content:space-between;padding:0 100px;
		}
	`;


	return(
		<>
			<HeaderContainer className={'header_container'}>
				<HeaderInner>
					<Logo/>
					<Nav/>
				</HeaderInner>
				<NavToggleBtn/>
			</HeaderContainer>
		</>
	)
}

export default Header