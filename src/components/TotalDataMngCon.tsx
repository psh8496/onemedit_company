import ConTitle from "./ConTitle.tsx";
import TotalDataMngSlide from "./TotalDataMngSlide.tsx";
import styled from "styled-components";

function TotalDataMngCon(){

	const TotalDataMngContainer = styled.div`
		padding:40px 0;
	`;

	const TotalDataMngConInner = styled.div`
	
	`;

	return(
		<>
			<TotalDataMngContainer>
				<TotalDataMngConInner>
					<ConTitle con_title="통합 개인의료 데이터 관리" con_style={{textAlign:'center'}} is_wrap={true}/>
					<TotalDataMngSlide/>
				</TotalDataMngConInner>
			</TotalDataMngContainer>
		</>
	)
}

export default TotalDataMngCon