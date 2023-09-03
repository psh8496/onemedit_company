import ServiceInfoBox from "./ServiceInfoBox.tsx";
import ConTitle from "./ConTitle.tsx";
import styled from "styled-components";


function ServiceInfoCon(){

	const ServiceInfoContainer = styled.div`
		padding:40px 0;
	
		@media (min-width:1124px){
			padding:100px 0;
		}
	`;

	const ServiceInfoInner = styled.div`
		padding:0 40px;box-sizing:border-box;
	
		@media (min-width:1124px){
			width:1100px;margin:0 auto;padding:0;
		}
	`;


	return(
		<>
			<ServiceInfoContainer>
				<ServiceInfoInner>
					<ConTitle con_title="편리하고 안전한/의료서비스" con_style={{textAlign:'left'}} is_wrap={true}/>
					<ServiceInfoBox title="비대면진료 서비스"
									text="비대면진료 서비스를 통해 환자들은 병원에 방문하지 않고도 의사와의 상담을 받을 수 있으며, AI기능을 통해 질병의 초기 발견과 예방에 도움을 줄 수 있습니다."
									img_url="src/assets/images/service_info1.png"
					/>
					<ServiceInfoBox title="원격모니터링 서비스"
									text="맞춤주치의 원격 모니터링 기능을 통해 환자들의 건강 상태를 실시간으로 모니터링하고, 의사들은 환자들의 상태를 원격으로 확인할 수 있습니다."
									img_url="src/assets/images/service_info2.png"
					/>
					<ServiceInfoBox title="건강약속 서비스" 
									text="건강약속 서비스를 통해, 모든 유저가 함께 실시간 스트리밍, 운동 콘텐츠(모션), 의학강의를 즐길 수 있습니다."
									img_url="src/assets/images/service_info3.png"
					/>
				</ServiceInfoInner>
			</ServiceInfoContainer>
		</>
	)
}

export default ServiceInfoCon