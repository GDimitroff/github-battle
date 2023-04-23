import * as React from 'react';
import Hover from './Hover';

const container: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
};

interface ITooltipProps {
  children: React.ReactNode;
  element: JSX.Element;
}

interface ITooltipState {
  hovering: boolean;
}

export default class Tooltip extends React.Component<
  ITooltipProps,
  ITooltipState
> {
  constructor(props: ITooltipProps) {
    super(props);

    this.state = {
      hovering: false,
    };

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.setState({ hovering: true });
  }

  mouseOut() {
    this.setState({ hovering: false });
  }

  render() {
    const { hovering } = this.state;
    const { element, children } = this.props;

    return (
      <div
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        style={container}
      >
        {hovering === true && element}
        {children}
      </div>
    );
  }
}
