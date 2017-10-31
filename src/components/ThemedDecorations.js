// Code ThemedDecoration Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class ThemedDecorations extends React.Component{
    render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
         return React.cloneElement(child,{
           className: this.props.theme
          // <div className={this.props.theme}>{child}</div> 
        })
    });
      return(
        <div>
        {childrenWithWrapperDiv}
        </div>
      )
  }
}