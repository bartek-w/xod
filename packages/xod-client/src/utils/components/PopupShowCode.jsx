import React from 'react';
import SkyLight from 'react-skylight';

class PopupShowCode extends React.Component {
  constructor(props) {
    super(props);

    this.popup = null;

    this.assignPopupRef = this.assignPopupRef.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.isVisible && nextProps.isVisible) {
      this.show();
    }
  }

  show() {
    if (this.popup) {
      this.popup.show();
    }
  }

  hide() {
    if (this.popup) {
      this.popup.hide();
    }
  }

  assignPopupRef(ref) {
    this.popup = ref;
  }

  render() {
    return (
      <SkyLight
        hideOnOverlayClicked
        dialogStyles={{
          height: 'auto',
        }}
        ref={this.assignPopupRef}
        title="Transpiled code:"
        afterClose={this.props.onClose}
      >
        <textarea
          className="PopupShowCode-codebox"
          value={this.props.code}
          readOnly
        />
        <p>
          This code could be uploaded onto your device.<br />
          Just connect your device via USB and click on &quot;Upload&quot; button.
        </p>
      </SkyLight>
    );
  }
}

PopupShowCode.defaultProps = {
  isVisible: false,
  code: '',
};

PopupShowCode.propTypes = {
  isVisible: React.PropTypes.bool,
  code: React.PropTypes.string,
  onClose: React.PropTypes.func,
};

export default PopupShowCode;