import css from "./GalleryList.module.css";
import Container from "react-bootstrap/Container";
import photo_1 from "../../images/galleryList/photo_1.jpg";
import photo_2 from "../../images/galleryList/photo_2.jpg";
import photo_3 from "../../images/galleryList/photo_3.jpg";
import photo_4 from "../../images/galleryList/photo_4.jpg";
import photo_5 from "../../images/galleryList/photo_5.jpg";
import photo_6 from "../../images/galleryList/photo_6.jpg";
import overlay from "../../images/galleryList/overlay.png";

const GalleryList = () => {
  return (
    <section className={css.galleryList_section}>
      <Container>
        <div className={css.allPartSection}>
          <ul className={css.galleryList}>
            <li className={css.galleryItem}>
              <a href="/" className={css.galleryItem_photoLink}>
                <img
                  src={photo_1}
                  alt="gallery appearance"
                  className={css.block}
                />
                <div className={css.photoLink_overlay}>
                  <img src={overlay} alt="button" />
                </div>
              </a>
            </li>
            <li className={css.galleryItem}>
              <a href="/" className={css.galleryItem_photoLink}>
                <img
                  src={photo_2}
                  alt="gallery appearance"
                  className={css.block}
                />
                <div className={css.photoLink_overlay}>
                  <img src={overlay} alt="button" />
                </div>
              </a>
            </li>
            <li className={css.galleryItem}>
              <a href="/" className={css.galleryItem_photoLink}>
                <img
                  src={photo_3}
                  alt="gallery appearance"
                  className={css.block}
                />
                <div className={css.photoLink_overlay}>
                  <img src={overlay} alt="button" />
                </div>
              </a>
            </li>
            <li className={css.galleryItem}>
              <a href="/" className={css.galleryItem_photoLink}>
                <img
                  src={photo_4}
                  alt="gallery appearance"
                  className={css.block}
                />
                <div className={css.photoLink_overlay}>
                  <img src={overlay} alt="button" />
                </div>
              </a>
            </li>
            <li className={css.galleryItem}>
              <a href="/" className={css.galleryItem_photoLink}>
                <img
                  src={photo_5}
                  alt="gallery appearance"
                  className={css.block}
                />
                <div className={css.photoLink_overlay}>
                  <img src={overlay} alt="button" />
                </div>
              </a>
            </li>
            <li className={css.galleryItem}>
              <a href="/" className={css.galleryItem_photoLink}>
                <img
                  src={photo_6}
                  alt="gallery appearance"
                  className={css.block}
                />
                <div className={css.photoLink_overlay}>
                  <img src={overlay} alt="button" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default GalleryList;
