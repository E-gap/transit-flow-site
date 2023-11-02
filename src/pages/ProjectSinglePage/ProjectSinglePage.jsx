import ProjectSingleMain from "../../components/ProjectSingleMain/ProjectSingleMain";
import Container from "react-bootstrap/Container";
import css from "./ProjectSinglePage.module.css";
import project_details_photo from "../../images/projectSinglePage/project_details_photo.jpg";
import storage_photo from "../../images/projectSinglePage/storage_photo.jpg";
import photo_1 from "../../images/galleryProjects/photo_1.jpg";
import photo_2 from "../../images/galleryProjects/photo_2.jpg";
import photo_3 from "../../images/galleryProjects/photo_3.jpg";
import overlay from "../../images/galleryProjects/overlay.png";

const ProjectSinglePage = () => {
  return (
    <>
      <ProjectSingleMain />
      <section className={`${css.projectDetails} ${css.section}`}>
        <Container>
          <div className={css.projectDetails_allPartSection}>
            <img
              src={project_details_photo}
              alt="track and mountains"
              width={642}
            />
            <div className={css.projectDetails_text}>
              <h2>Project Details</h2>
              <ul className={css.projectDetails_list}>
                <li className={css.projectDetails_item}>
                  <p>
                    Customer <span>:</span>
                  </p>
                  <p>David Warner</p>
                </li>
                <li className={css.projectDetails_item}>
                  <p>
                    Category <span>:</span>
                  </p>
                  <p>Warehouse Transportaion</p>
                </li>
                <li className={css.projectDetails_item}>
                  <p>
                    Date <span>:</span>
                  </p>
                  <p>12 December, 2022</p>
                </li>
                <li className={css.projectDetails_item}>
                  <p>
                    Status <span>:</span>
                  </p>
                  <p>Completed</p>
                </li>
                <li className={css.projectDetails_item}>
                  <p>
                    Tags <span>:</span>
                  </p>
                  <p>Life Style Travel , Best Delivery</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section className={`${css.projects} ${css.section}`}>
        <Container>
          <div className={css.projects_allPartSection}>
            <div>
              <h2>Wharehouse Transportation</h2>
              <p className={css.projects_text}>
                Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
                Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit
                nec feugiat tempus.Phasellus at quam id elit hendrerit semper
                feugiat id nunc. Morbi quis justo velit. Duis semper lacus
                scelerisque, aliquam leo quis, porttitor leo. Fusce lectus ex,
                pretium efficitur suscipit sed, faucibus vel elit Integer
                adipiscing erat eget risus sollicitudin pellentesque non erat.
                Maecenas nibh dolor malesuada sagittis accumsan ipsum.
                Pellentesque ultrices ultrices sapien, nec tincidunt nunc
                posuere.
              </p>
              <ul className={css.projects_optionList}>
                <li className={css.projects_optionItem}>
                  National Customer Service Center – 24 hours a day.
                </li>
                <li className={css.projects_optionItem}>
                  Online shipping navigator lets you quote, book, and track
                  shipments
                </li>
                <li className={css.projects_optionItem}>
                  Your Logistics Needs Are At The Heart Of Our Business
                </li>
                <li className={css.projects_optionItem}>
                  Very careful handling of valuable goods
                </li>
                <li className={css.projects_optionItem}>
                  Time saving and convenient transportation services in your
                  area
                </li>
              </ul>
            </div>
            <div>
              <h2>Our Project Transportation</h2>
              <p className={css.projects_text}>
                Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
                Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit
                nec feugiat tempus.Phasellus at quam id elit hendrerit semper
                feugiat id nunc. Morbi quis justo velit. Duis semper lacus
                scelerisque, aliquam leo quis, porttitor leo. Fusce lectus ex,
                pretium efficitur suscipit sed, faucibus vel elit Integer
                adipiscing erat eget risus sollicitudin pellentesque non erat.
                Maecenas nibh dolor malesuada sagittis accumsan ipsum.
                Pellentesque ultrices ultrices sapien, nec tincidunt nunc
                posuere.
              </p>
              <img src={storage_photo} alt="storage" width="100%" />
            </div>
            <div>
              <h2>Related Project</h2>
              <ul className={css.galleryList}>
                <li className={css.galleryItem}>
                  <a href="/projects/id" className={css.galleryItem_photoLink}>
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
                  <a href="/projects/id" className={css.galleryItem_photoLink}>
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
                  <a href="/projects/id" className={css.galleryItem_photoLink}>
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
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectSinglePage;
