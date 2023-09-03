import styled from "styled-components";
import {ProvenExpertBoxProps} from "../types/ProvenExpertBoxProps.ts";


function ProvenExpertBox(props:ProvenExpertBoxProps){

	const ProvenExpertBoxWrap = styled.div`
	
	`;

	const ProvenExpertBoxImg = styled.img`
		width:100%;border-radius:20px;vertical-align:top;
	`;

	const ProvenExpertBoxSubject = styled.h3`
		margin:15px 0 8px;color:#111;font-size:18px;
	`;

	const ProvenExpertBoxText = styled.p`
		width:80%;margin:0 auto;color:#535353;font-size:14px;font-weight:500;line-height:1.4;word-break:keep-all;
	`;

	return(
		<>
			<ProvenExpertBoxWrap>
				<ProvenExpertBoxImg src={props.img_src} alt={props.img_alt}/>
				<ProvenExpertBoxSubject>{props.subject}</ProvenExpertBoxSubject>
				<ProvenExpertBoxText>{props.text}</ProvenExpertBoxText>
			</ProvenExpertBoxWrap>
		</>
	)
}

export default ProvenExpertBox