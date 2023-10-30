import css from "./ClientsList.module.css";
import client_1 from "../../images/aboutUsClients/client_1.jpg";
import client_2 from "../../images/aboutUsClients/client_2.jpg";
import client_3 from "../../images/aboutUsClients/client_3.jpg";
import client_4 from "../../images/aboutUsClients/client_4.jpg";

const ClientsList = () => {
  return (
    <ul className={css.clientsList}>
      <li className={css.clientsItem}>
        <a href="/">
          <img src={client_1} alt="logo client" />
        </a>
      </li>
      <li className={css.clientsItem}>
        <a href="/">
          <img src={client_2} alt="logo client" />
        </a>
      </li>
      <li className={css.clientsItem}>
        <a href="/">
          <img src={client_3} alt="logo client" />
        </a>
      </li>
      <li className={css.clientsItem}>
        <a href="/">
          <img src={client_4} alt="logo client" />
        </a>
      </li>
    </ul>
  );
};

export default ClientsList;
