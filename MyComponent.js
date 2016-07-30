import React, { Component } from 'react';
import Radium from 'radium';
import Accordion from './Accordion';
import ArrowIcon from './ArrowIcon';

class MyComponent extends Component {

  titleBar(){
    return(
      <div>
        My accordion {/* <ArrowIcon />*/}
      </div>
    )
  }
 
  render() {

    const s = {
      wrap : {
        fontFamily: '"avenir next",avenir,sans-serif'
      }
    }  

    return (
      <div style={s.wrap}>
        <Accordion title={this.titleBar()}>
          <div style={{backgroundColor:'magenta'}}>
            content<br />
            content<br />
            content<br />
          </div>
        </ Accordion>
        <Accordion title="another one">
          <div style={{backgroundColor:'aqua'}}>
          Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac suscipit leo. Carpe diem vulputate est nec commodo rutrum. Pellentesque mattis convallis nisi eu and I ain’t stoppin until the swear jar’s full. Ut rhoncus velit at mauris interdum, fringilla dictum neque rutrum. Curabitur mattis odio at erat viverra lobortis. Poppin’ bottles on the ice, tristique suscipit mauris elementum tempus. Quisque ut felis vitae elit tempor interdum viverra a est. Drop it like it’s hot, at pretium quam. In nec scelerisque purus. Nam dignissim lacus ipsum, a ullamcorper nulla pretium non. Aliquam sed enim faucibus, pulvinar felis at, vulputate augue. Ten, ten, twenties on them fifties, trick, at tempus libero fermentum id. Vivamus ut nisi dignissim, condimentum urna vel, dictum massa. Donec justo yolo, rutrum vitae dui in, dapibus tempor tellus. I do it big. Fusce ut sagittis mi.

Donec accumsan consectetur faucibus. YOLO, you only live once. Donec eget semper eros. Vestibulum lobortis eros vel elementum suscipit. Nunc tempus lectus elit, et faucibus ligula dignissim nec. Phasellus in turpis porta, laoreet sapien vitae, auctor ante.  Your chick, she so thirsty, nec consequat dui imperdiet eget. In quis rhoncus sem, eu eleifend purus. Etiam sodales turpis volutpat ultricies blandit. #Swaggityswag Donec pretium tincidunt mi, id semper dolor commodo eget.

Don’t trust anyone, cause you only live once. Aliquam imperdiet, ligula vehicula sodales lobortis, dui arcu ultricies libero, vitae tempor eros libero sed neque. Pop a molly, I’m sweatin’, consequat feugiat eros.  How you like your eggs, fried or fertilized? Mi ullamcorper molestie vehicula, nulla est hendrerit ante, eget tempor augue felis ut velit. Sed ut tortor nibh. Phasellus et erat a nisl molestie tempor et at mi. I’m ballin’ hard, I need a jersey on, sollicitudin eget auctor quis, aliquet vitae nullai.
          </div>
        </Accordion>
      </div>
    );
  }
}

export default Radium(MyComponent);