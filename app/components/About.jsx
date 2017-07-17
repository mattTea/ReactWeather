var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p className="text-center">Welcome to the React Weather App.</p>
      <p className="text-center">Go ahead, search for the current temperature<br></br><em>anywhere</em> in the world!</p>
      <p className="text-center"><small>Built in React for the Complete React Web Developer Course.</small></p>
      <p>Here are some of the tools and resources used...</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Used to search for weather data by city.
        </li>
      </ul>
      <blockquote className="text-center">
        The React Weather App is so quick and slick
        <cite>Matt Tea</cite>
      </blockquote>
    </div>
  )
};

module.exports = About;
