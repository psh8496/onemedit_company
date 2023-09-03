import styled from "styled-components";


function NavToggleBtn(){

	const NavToggleBtnContainer = styled.button`
		position:absolute;top:10px;right:10px;width:36px;height:36px;padding:0;border:0;background-color:transparent;font-size:0;
		&:before{content:'';display:inline-block;width:20px;height:2px;margin-bottom:4px;background-color:#111;transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);}
		&:after{content:'';display:inline-block;width:20px;height:2px;margin-top:4px;background-color:#111;transition:transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);}
		.header_container.nav_open &:before{width:18px;transform:rotate(45deg);transform-origin:0 0;}
		.header_container.nav_open &:after{width:18px;transform:rotate(-45deg);transform-origin:0 100%;}

		@media (min-width:1124px){
			display:none;
		}
	`;

	const NavToggleBtnSpan = styled.span`
		display:block;width:20px;height:2px;margin:0 auto;background-color:#111;transition:opacity 0.55s ease;
		.header_container.nav_open &{opacity:0;}
	`;


	return(
		<>
			<NavToggleBtnContainer className={'nav_toggle_btn'}>
				<NavToggleBtnSpan></NavToggleBtnSpan>
			</NavToggleBtnContainer>
		</>
	)
}

export default NavToggleBtn