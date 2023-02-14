/* eslint-disable max-len */
import style from './Reviews.module.scss';
import { useRef } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as PrevArrowSvg } from '../../../../../assets/svg/reviewsArrowPrev.svg';
import { ReactComponent as NextArrowSvg } from '../../../../../assets/svg/reviewsArrowNext.svg';
import JuliaReviewer from '../../../../../assets/img/JuliaReviewer.png';
import SvetlanaReviewer from '../../../../../assets/img/SvetlanaReviewer.png';
import SergeiReviewer from '../../../../../assets/img/SergeiReviewer.png';
import useWindowDimensions from '../../../../../hooks/screenViewPort';
import 'swiper/scss';

export const Reviews = () => {
  const swiperRef = useRef();
  const { width } = useWindowDimensions();

  return (
    <section className={style.reviewsSection} id='reviews'>
      <h2 className={style.reviewsTitle}>Отзывы наших клиентов</h2>
      <div className={style.swiperWrapper}>
        <Swiper
          modules={[Navigation]}
          loop
          slidesPerView={width > 768 ? 3 : width <= 550 ? 1 : 2}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide className={style.reviewsSwiperSlide}>
            <figure className={style.reviewsFigure}>
              <img
                className={style.reviewsAvatar}
                src={JuliaReviewer}
                alt="Julia's avatar"
              />
              <figcaption className={style.reviewsName}>Юлия С</figcaption>
              <blockquote className={style.reviewsBlockqoute}>
                «Очень удобная платформа для открытия мультивалютных счётов»
              </blockquote>
            </figure>
          </SwiperSlide>
          <SwiperSlide className={style.reviewsSwiperSlide}>
            <figure className={style.reviewsFigure}>
              <img
                className={style.reviewsAvatar}
                src={SvetlanaReviewer}
                alt="Svetlana's avatar"
              />
              <figcaption className={style.reviewsName}>Светлана Н</figcaption>
              <blockquote className={style.reviewsBlockqoute}>
                «Пользуюсь платформой уже больше года, нравится, что можно
                быстро менять валюту по выгодному курсу»
              </blockquote>
            </figure>
          </SwiperSlide>
          <SwiperSlide className={style.reviewsSwiperSlide}>
            <figure className={style.reviewsFigure}>
              <img
                className={style.reviewsAvatar}
                src={SergeiReviewer}
                alt="Sergei's avatar"
              />
              <figcaption className={style.reviewsName}>Сергей А</figcaption>
              <blockquote className={style.reviewsBlockqoute}>
                «Открыл счёт в биткоинах, могу быстро следить за курсом и делать
                обмен»
              </blockquote>
            </figure>
          </SwiperSlide>
        </Swiper>
        <button
          className={style.reviewsBtnPrev}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <PrevArrowSvg className={style.reviewsArrowImg} />
        </button>
        <button
          className={style.reviewsBtnNext}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <NextArrowSvg className={style.reviewsArrowImg} />
        </button>
      </div>
    </section>
  );
};
