import { connect } from 'react-redux';
import Login from './Login';
import {
    setPageSelected,
    setBackgroundColor,
    setFontColor
} from '../../Actions';

const mapStateToProps = (state) => ({
    pageSelected: state.routingReducer.pageSelected,
    backgroundColor: state.routingReducer.backgroundColor,
    fontColor: state.routingReducer.fontColor
});
  
const mapDispatchToProps = (dispatch) => {
    return {
        setPageSelected: (page) => dispatch(setPageSelected(page)),
        setBackgroundColor: (color) => dispatch(setBackgroundColor(color)),
        setFontColor: (color) => dispatch(setFontColor(color)),

    };
};
  
const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
  
export default LoginContainer;