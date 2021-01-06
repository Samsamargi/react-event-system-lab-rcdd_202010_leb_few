// Code Keypad Component Here

class Keypad extends React.Component{
  keypad = () => {
    console.log('Entering password...');
  }
  render(){
    return(
      <input type="password "onKeyUp = {this.keypad} >Password/>);
  }
}
