import TransportationMain from "../../components/TransportationMain/TransportationMain";
import Container from "react-bootstrap/Container";
import css from "./TransportationPage.module.css";
import project_details_photo from "../../images/transportationPage/project_details_photo.jpg";

const TransportationPage = () => {
  return (
    <>
      <TransportationMain />
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
    </>
  );
};

export default TransportationPage;
