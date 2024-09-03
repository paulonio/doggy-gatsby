import React, { Component, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

type State = {
  isError: boolean;
  message: string;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isError: false, message: '' };
  }

  static getDerivedStateFromError(error: Error): State {
    const { message } = error;
    return { isError: true, message };
  }

  render() {
    const { isError, message } = this.state;
    const { children } = this.props;

    if (isError) {
      return <div>{message}</div>;
    }

    return children;
  }
}

export default ErrorBoundary;
