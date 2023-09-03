import {SetStateAction, useState} from "react";
import {useRecoilState} from "recoil";
// @ts-ignore
import {LogInAtom} from "../recoil/LogInAtom.js";
import styled from "styled-components";


function Login() {

	const LoginContainer = styled.div``;

	const LoginInner = styled.div`
		margin:80px auto;padding:0 40px;
		
		@media (min-width:768px){
			max-width:480px;
		}
	
		@media (min-width:1124px){
			margin:200px auto;padding:0;
		}
	`;

	const LoginTitle = styled.h2`
		margin:0 0 34px;color:#000;font-size:26px;font-weight:500;
	
		@media (min-width:1124px){
			margin:0 0 54px;font-size:54px;text-align:center;
		}
	`;

	const LoginInput = styled.input`
		width:100%;height:45px;margin:6px 0;padding:0 20px;border:0;border-radius:5px;box-sizing:border-box;background-color:#f2f2f2;font-size:16px;
		&::placeholder{color:#aaa;font-size:14px;letter-spacing:-0.3px;}
	
		@media (min-width:1124px){
			height:50px;
			&::placeholder{font-size:16px;}
		}
	`;

	const LoginBtn = styled.button`
		width:100%;height:45px;margin:14px 0;border:0;border-radius:5px;background-color:#383838;color:#fff;font-size:14px;font-weight:500;
	
		@media (min-width:1124px){
			height:50px;font-size:16px;
		}
	`;



	const [username, setUsername] = useState('');
	const usernameChange = (event: {target: {value: SetStateAction<string>;};}) => {
		setUsername(event.target.value)
	}

	const [password, setPassword] = useState('');
	const passwordChange = (event: {target: {value: SetStateAction<string>;};}) => {
		setPassword(event.target.value)
	}

	const handleSubmit = () => {
		console.log(username, password)
	}

	const [isLogin, setIsLogin] = useRecoilState(LogInAtom);


	if(isLogin){
		return(
			<>
				<button>로그아웃</button>
			</>
		)
	}else{
		return(
			<>
				<LoginContainer>
					<LoginInner>
						<LoginTitle>관리자 로그인</LoginTitle>
						<form action="" method="post" onSubmit={handleSubmit}>
							<LoginInput type="text" placeholder="아이디" value={username} onChange={usernameChange}/>
							<LoginInput type="password" placeholder="비밀번호" value={password} onChange={passwordChange}/>
							<LoginBtn type="submit">로그인</LoginBtn>
						</form>
					</LoginInner>
				</LoginContainer>
			</>
		)
	}

}

export default Login