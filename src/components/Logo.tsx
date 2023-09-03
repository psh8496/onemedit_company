import styled from "styled-components";
import logoImage from '/src/assets/images/logo.png';


function Logo(){

	const LogoContainer = styled.span`
		display:inline-flex;align-items:center;height:56px;margin:0 10px;vertical-align:top;font-size:0;
	
		@media (min-width:1124px){
			height:auto;margin:0;
		}
	`;

		const LogoLink = styled.a`
		display:inline-block;padding:10px;
		
		@media (min-width:1124px){
			padding:0;
		}
	`;

		const LogoImage = styled.img`
		vertical-align:middle;
	`;


	return(
		<>
			<LogoContainer>
				<LogoLink>
					<LogoImage src={logoImage} alt="닥터루시드" />
				</LogoLink>
			</LogoContainer>
		</>
	)
}

export default Logo