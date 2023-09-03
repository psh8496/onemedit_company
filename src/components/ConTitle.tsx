import {ConTitleProps} from "../types/ConTitleProps.ts";
import styled from "styled-components";


function ConTitle(props: ConTitleProps){

	const ConTitleContainer = styled.div`
		margin-top:40px;margin-bottom:20px;
	
		@media (min-width:768px){
			margin-bottom:40px;
		}
		
		@media (min-width:1124px){
			margin-top:100px;margin-bottom:80px;
		}
	`;

	const ConTitleText = styled.p`
		margin:0;color:#111;font-size:26px;font-weight:500;line-height:1.35;
	
		@media (min-width:768px){
			font-size:30px;
		}
		
		@media (min-width:1124px){
			font-size:54px;line-height:1.2;
		}
	`;


	if(!props.is_wrap){
		return(
			<>
				<ConTitleContainer style={props.con_style}>
					<ConTitleText>{props.con_title}</ConTitleText>
				</ConTitleContainer>
			</>
		)
	}else{
		const con_title_arr = props.con_title.split("/");
		return(
			<>
				<ConTitleContainer style={props.con_style}>
					{con_title_arr.map((title, index) => (
						<ConTitleText key={index}>{title}</ConTitleText>
					))}
				</ConTitleContainer>
			</>
		)
	}
}

export default ConTitle