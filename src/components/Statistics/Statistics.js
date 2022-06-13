import PropTypes from 'prop-types';

export default function Statistics(props) {
  // const { good, neutral, bad, total, positivePercentage } = props;

  /* Написал эту хелп функцию, чтобы можно было перебрать пропсы методом и вернуть сразу готовый абзац для каждого, а не отдельно руками
  писать. Не знаю, правильнее ли так) конкретно в этой задаче - это абсурд, но тут я расцениваю это с точки зрения расширяемости, хотя
  здесь и отталкиваюсь именно от количества переданных пропсов, которое вряд ли будет значительно бОльшим)) Не знаю, как лучше,
  поэтому оставлю оба варианта  */
  function propNameNormalize(string) {
    return (
      string[0].toUpperCase() +
      `${[...string]
        .map(letter =>
          letter === letter.toUpperCase() ? ` ${letter.toLowerCase()}` : letter
        )
        .join('')}`.slice(1)
    );
  }

  return (
    <>
      {Object.keys(props).map((propName, i) => (
        <p key={i}>
          {propNameNormalize(propName)}: {props[propName]}
        </p>
      ))}

      {/* <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive percentage: {positivePercentage}</p> */}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
