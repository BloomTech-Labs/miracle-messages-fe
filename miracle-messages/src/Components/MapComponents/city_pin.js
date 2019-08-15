import React, {PureComponent} from 'react';
import { updatePopupAction } from "../../Actions/updatePopupAction"
import { connect } from "react-redux";

const ICON = `m9.7717 27.654c-9.451-4.2256-11.249-16.233-3.4386-22.959 6.012-5.1767 13.806-4.5497 19.042 1.532 4.9304 5.7259 4.5939 13.405-.80889 18.46-4.5929 4.2975-9.5808 5.2976-14.795 2.9664zm10.916-1.8994c6.0158-3.0376 8.2912-11.081 4.7934-16.944-4.6575-7.8071-15.857-7.9153-20.665-.19952-6.4422 10.34 4.9585 22.654 15.871 17.144zm-12.186-7.1471c.02215-2.2942-.3362-3.5732-.90477-3.2293-2.3744 1.436-.525-1.4092 3.3252-5.1156l4.2513-4.0925 4.1715 4.1738c3.7779 3.7801 5.5721 6.6604 3.2258 5.1789-.56183-.35477-.94481.91711-.96696 3.2113l-.03668 3.7987-13.102-.1265zm11.236-.4674.02416-2.5028-4.7218 4.3508-4.6369-4.4412-.02416 2.5028c-.02297 2.3794.20646 2.505 4.6552 2.548 4.4487.04295 4.6805-.07817 4.7035-2.4576zm-2.7821-2.6716c1.0065-1.1892.73507-1.3968-1.8582-1.4219-2.5933-.02504-2.8686.17735-1.8853 1.3857.63332.77828 1.4695 1.4181 1.8582 1.4219.38868.0038 1.2371-.61982 1.8853-1.3857zm.25968-5.3532-2.0596-2.0998-4.1996 4.1192 8.3188.08032z" stroke-width=".93591`;


const pinStyle = {
  cursor: 'pointer',
  fill: '#2d2d2d',
  stroke: 'none'
};


class CityPin extends PureComponent {
  render() {
    const  PinClickHandler=()=> {this.props.updatePopupAction(this.props.city)} 
    const size=20;

    return (
      <svg
        height={size}
        viewBox="0 0 30 30"
        style={{
          ...pinStyle,
          transform: `translate(${-size / 2}px,${-size}px)`
        }}
        onClick={PinClickHandler}
      >
        <path d={ICON} />
        
      </svg>
    );
  }
}

const mapStateToProps = state => {
  return {
    popupInfo: state.mapReducer.popupInfo,
  };
};

export default connect(
  mapStateToProps,
  {updatePopupAction}
)(CityPin);
