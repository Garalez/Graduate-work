import style from './Reviews.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useRef } from 'react';
import { ReactComponent as PrevArrow } from './img/navigatePrev.svg';
import { ReactComponent as NextArrow } from './img/navigateNext.svg';
import JuliaReviewer from './img/JuliaReviewer.png';
import SvetlanaReviewer from './img/SvetlanaReviewer.png';
import SergeiReviewer from './img/SergeiReviewer.png';
import 'swiper/scss';
import 'swiper/css/navigation';
import useWindowDimensions from '../../../hooks/screenViewPort';

export const Reviews = () => {
  const nextSlide = useRef(null);
  const prevSlide = useRef(null);
  const { width } = useWindowDimensions();

  return (
    <section className={style.reviewsSection} id='reviews'>
      <h2 className={style.reviewsTitle}>Отзывы наших клиентов</h2>
      <div className={style.swiperWrapper}>
        <Swiper
          modules={[Navigation]}
          loop
          slidesPerView={width > 768 ? 3 : width <= 550 ? 1 : 2}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevSlide.current;
            swiper.params.navigation.nextEl = nextSlide.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide className={style.reviewsSwiperSlide}>
            <figure className={style.reviewsFigure}>
              <img
                className={style.reviewsAvatar}
                src={JuliaReviewer}
                alt="Julia's avatar"
              />
              <figcaption className={style.reviewsName}>Юлия С</figcaption>
              <blockquote className={style.reviewsBlockqoute}>
                «Очень удобная платформа для открытия мультивалютных счётов»
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
              <figcaption className={style.reviewsName}>Светлана Н</figcaption>
              <blockquote className={style.reviewsBlockqoute}>
                «Пользуюсь платформой уже больше года, нравится, что можно
                быстро менять валюту по выгодному курсу»
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
              <figcaption className={style.reviewsName}>Сергей А</figcaption>
              <blockquote className={style.reviewsBlockqoute}>
                «Открыл счёт в биткоинах, могу быстро следить за курсом и делать
                обмен»
              </blockquote>
            </figure>
          </SwiperSlide>
        </Swiper>
        <button className={style.reviewsBtnPrev} ref={prevSlide}>
          <PrevArrow className={style.reviewsArrowImg} />
        </button>
        <button className={style.reviewsBtnNext} ref={nextSlide}>
          <NextArrow className={style.reviewsArrowImg} />
        </button>
      </div>
    </section>
  );
};
