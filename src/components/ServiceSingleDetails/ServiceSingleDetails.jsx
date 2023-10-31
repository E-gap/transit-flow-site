import css from "./ServiceSingleDetails.module.css";
import Container from "react-bootstrap/Container";
import transport_srvices_photo from "../../images/serviceSingleDetails/transport_services_photo.jpg";
import track_photo from "../../images/serviceSingleDetails/track_photo.jpg";
import persons_photo from "../../images/serviceSingleDetails/persons_photo.jpg";

const ServiceSingleDetails = () => {
  return (
    <>
      <section className={css.serviceSingleDetails}>
        <Container>
          <div className={css.allPartSection}>
            <ul className={css.details_list}>
              <li className={css.details_item}>
                <img
                  src={transport_srvices_photo}
                  alt="transport services"
                  width="100%"
                  style={{ marginBottom: "30px" }}
                />
                <h2 className={css.details_headline_icon}>
                  Sea Transport Services
                </h2>
                <p
                  className={css.details_item_text}
                  style={{ marginBottom: "20px" }}
                >
                  Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                  voluptatem, quia voluptas sit, aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos, qui ratione
                  voluptatem sequi nesciunt, neque porro quisquam est, qui
                  dolorem ipsum, quia dolor sit, amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt, ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur?
                </p>
                <p className={css.details_item_text}>
                  Quis autem vel eum iure reprehenderit, qui in ea voluptate
                  velit esse, quam nihil molestiae consequatur, vel illum, qui
                  dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos
                  et accusamus et iusto odio dignissimos ducimus, qui blanditiis
                  praesentium voluptatum deleniti atque corrupti, quos dolores
                  et quas molestias excepturi sint, obcaecati cupiditate non
                  provident, similique sunt in culpa, qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio.
                </p>
              </li>
              <li className={`${css.details_item} ${css.flex_row}`}>
                <div className={css.details_item_div_text}>
                  <h2>Benefit of Service</h2>
                  <p className={css.details_item_text}>
                    Sed ut perspiciatis, unde omnis iste natu volupta temaccu
                    santium doloremque laudantium, totam rem quae ab illo
                    inventore veritatis.
                  </p>
                  <ul className={css.details_item_benefitsList}>
                    <li>Clearance and compliance service</li>
                    <li>Saving Time to Deal with commodo iaculis</li>
                    <li>Automate your business elis tristique</li>
                    <li>Saving Time to Deal with commodo iaculis</li>
                  </ul>
                </div>
                <img src={track_photo} alt="tracks" width={686} />
              </li>
              <li className={`${css.details_item} ${css.flex_row}`}>
                <img src={persons_photo} alt="one person pass box to another" />
                <div
                  className={css.details_item_div_text}
                  style={{ width: "490px" }}
                >
                  <h2>How It Works</h2>
                  <p className={css.details_item_text}>
                    Sed ut perspiciatis, unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaque ipsa, quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt, explicabo. Nemo
                    enim ipsam voluptatem, quia voluptas sit, doloremque
                    laudantium.
                  </p>
                  <p className={css.details_item_text}>
                    Sed ut perspiciatis, unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam eaque ipsa, quae ab illo inventore veritatis.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ServiceSingleDetails;
