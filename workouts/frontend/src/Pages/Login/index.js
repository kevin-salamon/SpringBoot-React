import { connect } from 'react-redux';
import Login from './Login';
import {
    setPageSelected,
    setBackgroundColor
} from '../../Actions';

const mapStateToProps = (state) => ({
    pageSelected: state.routingReducer.pageSelected,
    backgroundColor: state.routingReducer.backgroundColor
});
  
const mapDispatchToProps = (dispatch) => {
    return {
        setPageSelected: (page) => dispatch(setPageSelected(page)),
        setBackgroundColor: (color) => dispatch(setBackgroundColor(color))
    };
};
  
const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
  
export default LoginContainer;