import ConTitle from "./ConTitle.tsx";
import ProvenExpertBox from "./ProvenExpertBox.tsx";
import styled from "styled-components";
import proven_expert_img1 from "/src/assets/images/proven_expert_img1.jpg";
import proven_expert_img2 from "/src/assets/images/proven_expert_img2.jpg";


function ProvenExpertCon(){

	const ProvenExpertContainer = styled.div`
		padding:40px 0;
	`;

	const ProvenExpertInner = styled.div`
		
	`;

	const ProvenExpertList = styled.ul`
		margin:0;padding:0;list-style:none;text-align:center;
	`;

	const ProvenExpertItem = styled.li`
		display:inline-block;width:140px;margin:10px;vertical-align:top;
	`;


	return(
		<>
			<ProvenExpertContainer>
				<ProvenExpertInner>
					<ConTitle con_title="검증된 전문가와/실시간 상담" con_style={{textAlign:'center'}} is_wrap={true}/>
					<ProvenExpertList>
						<ProvenExpertItem>
							<ProvenExpertBox
								img_src={proven_expert_img1}
								img_alt="인증&협력"
								subject="인증&협력"
								text="원메딧에 인증받은 협력 의료기관"
							/>
						</ProvenExpertItem>
						<ProvenExpertItem>
							<ProvenExpertBox
								img_src={proven_expert_img2}
								img_alt="전문 의료진"
								subject="전문 의료진"
								text="진료과별 전문의 선생님들 배치"
							/>
						</ProvenExpertItem>
					</ProvenExpertList>
				</ProvenExpertInner>
			</ProvenExpertContainer>
		</>
	)
}

export default ProvenExpertCon