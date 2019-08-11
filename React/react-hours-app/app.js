class App extends React.Component{
  render(){
    return(
      <div>
        <Date />
        <Service />
        <Rate />
        <Hours />
        <Subtotal />
        <Breakdown />
      </div>
    );
  }
}

class Date extends React.Component{
  render(){
    return(
      <div className='date'>
        <p>
          Date:<br />
          <input type="text" name="date" />
        </p>
      </div>
    )
  }
}

class Service extends React.Component{
  render(){
    return(
      <div className='service'>
        <p>
          Service:<br />
          <input type="text" name="service" />
        </p>
      </div>
    )
  }
}

class Rate extends React.Component{
  render(){
    return(
      <div className='rate'>
        <p>
          Rate:<br />
          <input type="text" name="rate" />
        </p>
      </div>
    )
  }
}

class Hours extends React.Component{
  render(){
    return(
      <div className='hours'>
        <p>
          Hours:<br />
          <input type="text" name="hours" />
        </p>
      </div>
    )
  }
}

class Subtotal extends React.Component{
  render(){
    return(
      <div className='subtotal'>
        <p>
          Subtotal:<br />
          <input type="text" name="subtotal" />
        </p>
      </div>
    )
  }
}

class Breakdown extends React.Component{
  render(){
    return(
      <div className='breakdown'>
        <p>
          Breakdown:<br />
          <input type="text" name="breakdown" />
        </p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);