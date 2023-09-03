import {AppDownloadBtnProps} from "../types/AppDownloadBtnProps.ts";
import styled from "styled-components";


function AppDownloadBtn({download_url, icon_url, text}: AppDownloadBtnProps){

	const AppDownloadBtnLink = styled.a`
		display:inline-flex;justify-content:center;align-items:center;min-height:44px;padding:5px 25px;border-radius:100px;box-sizing:border-box;background-color:#fff;text-decoration:none;
	
		@media (min-width:768px){
			min-height:50px;padding:5px 28px;
		}
	
		@media (min-width:1124px){
			min-height:56px;padding:5px 30px;transition:.3s box-shadow;
			&:hover{box-shadow:10px 10px 10px rgba(221,221,227,1);}
		}
	`;

	const AppDownloadBtnImage = styled.img`
		height:16px;margin-right:10px;
	
		@media (min-width:768px){
			height:18px;
		}
	
		@media (min-width:1124px){
			height:20px;
		}
	`;

	const AppDownloadBtnText = styled.span`
		color:#111;font-size:13px;font-weight:600;
	
		@media (min-width:768px){
			font-size:16px;
		}
	
		@media (min-width:1124px){
			font-size:16px;
		}
	`;


	return(
		<>
			<AppDownloadBtnLink href={download_url} target="_blank">
				<AppDownloadBtnImage src={icon_url} alt=""/>
				<AppDownloadBtnText>{text}</AppDownloadBtnText>
			</AppDownloadBtnLink>
		</>
	)
}

export default AppDownloadBtn