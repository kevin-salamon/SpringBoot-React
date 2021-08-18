import { connect } from 'react-redux';
import Login from './Login';
import {
    setPageSelected
} from '../../Actions';

const mapStateToProps = (state) => ({
    pageSelected: state.routingReducer.pageSelected
});
  
const mapDispatchToProps = (dispatch) => {
    return {
        setPageSelected: (page) => dispatch(setPageSelected(page))
    };
};
  
const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
  
export default LoginContainer;