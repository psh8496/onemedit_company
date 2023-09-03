import {ServiceInfoBoxProps} from "../types/ServiceInfoBoxProps.ts";
import styled from "styled-components";


function ServiceInfoBox(props: ServiceInfoBoxProps){

	const ServiceInfoBoxWrap = styled.div`
		background-image:url(${props.img_url});
		
		display:inline-flex;justify-content:flex-end;flex-direction:column;width:100%;height:75vw;max-height:320px;margin-bottom:20px;padding:30px;border-radius:30px;box-sizing:border-box;vertical-align:top;
		background-color:#f6f6f6;background-repeat:no-repeat;background-position:top center;background-size:100% auto;
		&:last-of-type{margin-right:0;}
	
		@media (min-width:768px){
			display:inline-block;width:calc(100%/3 - 20px);height:360px;max-height:none;margin-bottom:0;margin-right:30px;padding-top:160px;
		}

		@media (min-width:1124px){
			width:340px;height:550px;margin-right:40px;padding:50px;padding-top:300px;
		}
	`;

	const ServiceInfoBoxTitle = styled.h3`
		margin:0 0 10px;color:#111;font-size:18px;font-weight:600;

		@media (min-width:1124px){
			margin-bottom:23px;font-size:22px;
		}
	`;

	const ServiceInfoBoxText = styled.p`
		margin:0;color:#535353;font-size:13px;font-weight:500;line-height:1.5;text-align:justify;
	
		@media (min-width:768px){
			line-height:1.7;
		}

		@media (min-width:1124px){
			font-size:16px;
		}
	`;


	return(
		<>
			<ServiceInfoBoxWrap>
				<ServiceInfoBoxTitle>{props.title}</ServiceInfoBoxTitle>
				<ServiceInfoBoxText>{props.text}</ServiceInfoBoxText>
			</ServiceInfoBoxWrap>
		</>
	)
}

export default ServiceInfoBox