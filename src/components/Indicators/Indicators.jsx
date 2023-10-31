import css from "./Indicators.module.css";

const Indicators = ({ indicators }) => {
  return (
    <ul className={css.indicatorsList}>
      {indicators.length < 3
        ? indicators.map((item, index) => {
            return (
              <li key={index} className={css.indicatorsItem}>
                <span>{item.number}</span>
                <p>{item.text}</p>
              </li>
            );
          })
        : indicators.map((item, index) => {
            return (
              <li
                key={index}
                className={`${css.indicatorsItem} ${css.indicatorsItem_more_2}`}
              >
                <span>{item.number}</span>
                <p>{item.text}</p>
              </li>
            );
          })}
    </ul>
  );
};

export default Indicators;
