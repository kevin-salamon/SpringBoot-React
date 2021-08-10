import { connect } from 'react-redux';
import Header from './Header';
import {
    setPageSelected
} from '../../Actions/routingActions.js';

const mapStateToProps = (state) => ({
    pageSelected: state.routingReducer.pageSelected
});
  
const mapDispatchToProps = (dispatch) => {
    return {
        setPageSelected: (page) => dispatch(setPageSelected(page))
    };
};
  
const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
  
export default HeaderContainer;