import styled from "styled-components";


function Nav(){

	const NavContainer = styled.div`
		display:none;width:100%;
		.header_container.nav_open &{display:block;}

		@media (min-width:1124px){
			display:inline-block;width:auto;margin-right:-30px;background-color:transparent;
		}
	`;

	const NavList = styled.ul`
		margin:0;padding:100px 0;
	
		@media (min-width:1124px){
			display:inline-block;padding:0;
		}
	`;

	const NavItem = styled.li`
		text-align:center;
		&.on > a{color:#111;font-weight:500;}
	
		@media (min-width:1124px){
			display:inline-block;
		}
	`;

	const NavLink = styled.a`
		cursor:pointer;display:inline-block;padding:15px 35px;color:#ccc;font-size:22px;text-align:center;text-decoration:none;letter-spacing:-0.3px;
		&:hover{color:#111;}
	
		@media (min-width:1124px){
			padding:5px 35px;font-size:17px;
		}
	`;


	return(
		<>
			<NavContainer className={'nav'}>
				<NavList>
					<NavItem className="on"><NavLink href="">서비스</NavLink></NavItem>
					<NavItem><NavLink href="">회사소개</NavLink></NavItem>
					<NavItem><NavLink href="">뉴스</NavLink></NavItem>
					<NavItem><NavLink href="">연락</NavLink></NavItem>
					<NavItem><NavLink href="">로그아웃</NavLink></NavItem>
				</NavList>
			</NavContainer>
		</>
	)
}

export default Nav
