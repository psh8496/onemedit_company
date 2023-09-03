import './App.css'
import { createGlobalStyle } from 'styled-components';
import pretendardThin from '/src/assets/font/pretendard/pretendard-thin.woff';
import pretendardExtraLight from '/src/assets/font/pretendard/pretendard-extraLight.woff';
import pretendardLight from '/src/assets/font/pretendard/pretendard-light.woff';
import pretendardRegular from '/src/assets/font/pretendard/pretendard-regular.woff';
import pretendardMedium from '/src/assets/font/pretendard/pretendard-medium.woff';
import pretendardSemiBold from '/src/assets/font/pretendard/pretendard-semiBold.woff';
import pretendardBold from '/src/assets/font/pretendard/pretendard-bold.woff';
import pretendardExtraBold from '/src/assets/font/pretendard/pretendard-extraBold.woff';
import pretendardBlack from '/src/assets/font/pretendard/pretendard-black.woff';

import Header from "./components/Header.tsx";
import MainPage from "./components/MainPage.tsx";

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'pretendard';
		src: url(${pretendardThin}) format('woff');
		font-weight: 100;
		font-style: normal;
	}

	@font-face {
		font-family: 'pretendard';
		src: url(${pretendardExtraLight}) format('woff');
		font-weight: 200;
		font-style: normal;
	}

	@font-face {
		font-family: 'pretendard';
		src: url(${pretendardLight}) format('woff');
		font-weight: 300;
		font-style: normal;
	}

	@font-face {
		font-family: 'pretendard';
		src: url(${pretendardRegular}) format('woff');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'pretendard';
		src: url(${pretendardMedium}) format('woff');
		font-weight: 500;
		font-style: normal;
	}

	@font-face {
		font-family: 'pretendard';
		src: url(${pretendardSemiBold}) format('woff');
		font-weight: 600;
		font-style: normal;
	}

	@font-face {
		font-family: 'pretendard';
		src: url(${pretendardBold}) format('woff');
		font-weight: 700;
		font-style: normal;
	}

	@font-face {
		font-family: 'pretendard';
		src: url(${pretendardExtraBold}) format('woff');
		font-weight: 800;
		font-style: normal;
	}

	@font-face {
		font-family: 'pretendard';
		src: url(${pretendardBlack}) format('woff');
		font-weight: 900;
		font-style: normal;
	}
	
	html,body{margin:0;padding:0;}
	html,body,button{font-family:'pretendard', serif;}
`;

function App(){
	return(
		<>
			<GlobalStyles /> {/* 글로벌 스타일을 적용합니다. */}

			<Header/>
			<div className="container">
				<MainPage/>
			</div>
		</>
	)
}

export default App
