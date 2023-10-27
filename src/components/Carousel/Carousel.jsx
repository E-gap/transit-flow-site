import css from "./Carousel.module.css";
import { useState } from "react";
import { testimonials } from "../../assets/testimonials";
import star_icon from "../../images/testimonials/star_icon.png";

const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const clickDown = () => {
    if (slide === 0) {
      setSlide(testimonials.length - 1);
    } else setSlide(slide - 1);
  };

  const clickUp = () => {
    if (slide + 1 === testimonials.length) {
      setSlide(0);
    } else setSlide(slide + 1);
  };

  /* const numberPrevSlide = (slide) => {
    if (slide === 0) {
      return testimonials.length - 1;
    } else return slide - 1;
  }; */

  const numberNextSlide = (slide) => {
    if (slide + 1 === testimonials.length) {
      return 0;
    } else return slide + 1;
  };

  return (
    <div className={css.carousel}>
      <div className={css.headlineButtons}>
        <h2>What Our Customer Say</h2>
        <ul>
          <li>
            <button className={css.buttonBack} onClick={clickDown} />
          </li>
          <li className={css.buttonNext}>
            <button className={css.buttonNext} onClick={clickUp} />
          </li>
        </ul>
      </div>
      <ul className={css.testimonialList}>
        <li className={css.testimonialItem}>
          <div className={css.testimonialAuthor}>
            <img
              src={testimonials[slide].authorPhoto}
              className={css.testimonialAuthorPhoto}
              alt="authot testimonial"
            />
            <div className={css.authorData}>
              <p className={css.authorName}>{testimonials[slide].authorName}</p>
              <p className={css.authorCompany}>
                {testimonials[slide].authorCompany}
              </p>
            </div>
            <span className={css.quotes} />
          </div>
          <p className={css.testimonialText}>{testimonials[slide].text}</p>
          <ul className={css.testimonialStarsList}>
            {Array.from({ length: testimonials[slide].grade }, (v, k) => {
              return (
                <li>
                  <img src={star_icon} alt="stars grade" />
                </li>
              );
            })}
          </ul>
        </li>
        <li className={css.testimonialItem}>
          <div className={css.testimonialAuthor}>
            <img
              src={testimonials[numberNextSlide(slide)].authorPhoto}
              className={css.testimonialAuthorPhoto}
              alt="authot testimonial"
            />
            <div className={css.authorData}>
              <p className={css.authorName}>
                {testimonials[numberNextSlide(slide)].authorName}
              </p>
              <p className={css.authorCompany}>
                {testimonials[numberNextSlide(slide)].authorCompany}
              </p>
            </div>
            <span className={css.quotes} />
          </div>
          <p className={css.testimonialText}>
            {testimonials[numberNextSlide(slide)].text}
          </p>

          <ul className={css.testimonialStarsList}>
            {Array.from({ length: testimonials[slide].grade }, (v, k) => {
              return (
                <li>
                  <img src={star_icon} alt="stars grade" />
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
