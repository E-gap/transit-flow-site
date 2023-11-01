import css from "./Pricing.module.css";
import Container from "react-bootstrap/Container";
import LittleText from "../LittleText/LittleText";
import ButtonUser from "../ButtonUser/ButtonUser";

const Pricing = () => {
  return (
    <section className={css.pricing}>
      <Container>
        <div className={css.allPartSection}>
          <LittleText text="Pricing" view="light" />
          <h2 className={css.section_headline}>Our Best Pricing</h2>
          <ul className={css.pricingList}>
            <li className={css.pricingItem}>
              <h3 className={css.pricing_name}>Basic</h3>
              <p className={css.pricing_price}>
                $39<span className={css.pricing_month}>/month</span>
              </p>
              <ul className={css.pricing_option_list}>
                <li className={css.pricing_option_item}>Single Truck</li>
                <li className={css.pricing_option_item}>Full Insurance</li>
                <li className={css.pricing_option_item}>500 Km</li>
                <li className={css.pricing_option_item}>
                  Real-time rate shopping
                </li>
              </ul>
              <ButtonUser text="Choose Plan" view="dark" />
            </li>
            <li className={css.pricingItem}>
              <h3 className={css.pricing_name}>Standard</h3>
              <p className={css.pricing_price}>
                $59<span className={css.pricing_month}>/month</span>
              </p>
              <ul className={css.pricing_option_list}>
                <li className={css.pricing_option_item}>Single Truck</li>
                <li className={css.pricing_option_item}>Full Insurance</li>
                <li className={css.pricing_option_item}>500 Km</li>
                <li className={css.pricing_option_item}>
                  Real-time rate shopping
                </li>
              </ul>
              <ButtonUser text="Choose Plan" view="light" />
            </li>
            <li className={css.pricingItem}>
              <h3 className={css.pricing_name}>Premium</h3>
              <p className={css.pricing_price}>
                $89<span className={css.pricing_month}>/month</span>
              </p>
              <ul className={css.pricing_option_list}>
                <li className={css.pricing_option_item}>Double Truck</li>
                <li className={css.pricing_option_item}>Full Insurance</li>
                <li className={css.pricing_option_item}>Unlimitted</li>
                <li className={css.pricing_option_item}>
                  Real-time rate shopping
                </li>
              </ul>
              <ButtonUser text="Choose Plan" view="dark" />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
