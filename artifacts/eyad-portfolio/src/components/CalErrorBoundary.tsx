import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class CalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[580px] items-center justify-center px-6 text-center">
          <div>
            <p className="text-sm text-[#8A8A8A]">
              Calendar failed to load.{" "}
              <a
                href="https://cal.com/eyad-alashry-wsxrt8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#005BFF] underline hover:opacity-80"
              >
                Book directly on Cal.com →
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
