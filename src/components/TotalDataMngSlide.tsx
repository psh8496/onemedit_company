// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/swiper/Swiper.css';
import styled from "styled-components";


function TotalDataMngSlide(){

	const TotalDataMngSlideContainer = styled.div`
	
	`;

	const TotalDataMngSlideInner = styled.div`
		position:relative;width:120px;margin:0 auto;
	`;

	const TotalDataMngSlideImg = styled.img`
		width:100%;
	`;

	const TotalDataMngSlideBox = styled.div`
		overflow:hidden;position:absolute;top:0;left:0;right:0;bottom:0;padding:8px;border-radius:40px;
	`;


	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return '<span class="'+ className +'">' + (index+1) + '</span>';
		},
	};
/*	const swiper = useSwiper(
	swiper.slideTo(4);
	setTimeout(() => swiper.slideNext())*/


	return(
		<>
			<TotalDataMngSlideContainer>
				<TotalDataMngSlideInner>
					<TotalDataMngSlideImg src="src/assets/images/total_data_mng_sld_bg.png" alt=""/>

					<TotalDataMngSlideBox>
						<Swiper
							pagination={pagination}
							modules={[Pagination]}
							className=""
						>
							<SwiperSlide><img src="src/assets/images/total_data_mng_sld_1.png" alt=""/></SwiperSlide>
							<SwiperSlide>Slide 2</SwiperSlide>
							<SwiperSlide>Slide 3</SwiperSlide>
							<SwiperSlide>Slide 4</SwiperSlide>
							<SwiperSlide>Slide 5</SwiperSlide>
							<SwiperSlide>Slide 6</SwiperSlide>
							<SwiperSlide>Slide 7</SwiperSlide>
							<SwiperSlide>Slide 8</SwiperSlide>
							<SwiperSlide>Slide 9</SwiperSlide>
						</Swiper>
					</TotalDataMngSlideBox>
				</TotalDataMngSlideInner>
			</TotalDataMngSlideContainer>
		</>
	)
}

export default TotalDataMngSlide