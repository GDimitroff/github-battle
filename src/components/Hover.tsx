import * as React from 'react';

interface IHoverProps {
  children: (hovering: boolean) => React.ReactNode;
}

interface IHoverState {
  hovering: boolean;
}

export default class Hover extends React.Component<IHoverProps, IHoverState> {
  constructor(props: IHoverProps) {
    super(props);

    this.state = {
      hovering: false,
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver = () => {
    this.setState({ hovering: true });
  };

  mouseOut = () => {
    this.setState({ hovering: false });
  };

  render() {
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {this.props.children(this.state.hovering)}
      </div>
    );
  }
}
