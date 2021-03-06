console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a comupter'
};

// JSX - JavaScript XML
var template = (
  <div>
    <h1>{`${app.title}`} </h1>
    <p>{`${app.subtitle}`} </p>
  </div>
);

var user = {
  name: 'Junior',
  age: 19,
  location: 'North Carolina'
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age && user.age >= 18 && <p> Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
