import AppDownloadBtn from "./AppDownloadBtn.tsx";
import styled from "styled-components";


function AppDownloadCon(){

	const AppDownloadContainer = styled.div`
		min-height:100vh;padding:150px 0 60px;box-sizing:border-box;background-image:url(src/assets/images/home_visual.jpg);background-repeat:no-repeat;background-size:cover;
	
		@media (min-width:1124px){
			padding:260px 0 60px;
		}
	`;

	const AppDownloadInner = styled.div`
		@media (min-width:1124px){
			display:flex;align-items:center;justify-content:space-between;width:746px;margin:0 auto;
		}
	`;

	const AppDownloadTitle = styled.div`
		margin-bottom:60px;
	
		@media (min-width:768px){
			margin-bottom:50px;
		}
	
		@media (min-width:1124px){
			margin-bottom:0;
		}
	`;

	const AppDownloadTextBox = styled.p`
		margin:0 0 20px;text-align:center;line-height:1.4;
	
		@media (min-width:768px){
			line-height:1.35;
		}
	
		@media (min-width:1124px){
			margin:0 0 50px;text-align:left;line-height:1.3;
		}
	`;

	const AppDownloadText = styled.span`
		color:#111;font-size:22px;font-weight:500;
	
		@media (min-width:768px){
			font-size:30px;
		}
	
		@media (min-width:1124px){
			font-size:40px;
		}
	`;

	const AppDownloadTextBold = styled.b`
		display:block;color:#111;font-size:24px;font-weight:800;
	
		@media (min-width:768px){
			font-size:30px;
		}
	
		@media (min-width:1124px){
			font-size:40px;
		}
	`;

	const AppDownloadBtnList = styled.ul`
		margin:0;padding:0;text-align:center;
	
		@media (min-width:1124px){
			margin-left:-5px;text-align:left;
		}
	`;

	const AppDownloadBtnItem = styled.li`
		display:inline-block;margin:5px;
	`;

	const AppDownloadPreview = styled.div``;

	const AppDownloadPreviewInner = styled.div`
		width:220px;margin:0 auto;font-size:0;
	
		@media (min-width:1124px){
			width:345px;margin-right:-75px;
		}
	`;

	const AppDownloadPreviewImage = styled.img`
		width:100%;
	`;


	return(
		<>
			<AppDownloadContainer>
				<AppDownloadInner>
					<AppDownloadTitle>
						<AppDownloadTextBox>
							<AppDownloadText>혁신적인 비대면 진료</AppDownloadText>
							<AppDownloadTextBold>닥터루시드</AppDownloadTextBold>
						</AppDownloadTextBox>

						<AppDownloadBtnList>
							<AppDownloadBtnItem>
								<AppDownloadBtn download_url="" icon_url="src/assets/images/app_store_ico.svg" text="App Store"/>
							</AppDownloadBtnItem>
							<AppDownloadBtnItem>
								<AppDownloadBtn download_url="" icon_url="src/assets/images/google_play_ico.svg" text="Google play"/>
							</AppDownloadBtnItem>
						</AppDownloadBtnList>
					</AppDownloadTitle>

					<AppDownloadPreview>
						<AppDownloadPreviewInner>
							<AppDownloadPreviewImage src="src/assets/images/app_preview_bg.png" alt=""/>
						</AppDownloadPreviewInner>
					</AppDownloadPreview>
				</AppDownloadInner>
			</AppDownloadContainer>
		</>
	)
}

export default AppDownloadCon