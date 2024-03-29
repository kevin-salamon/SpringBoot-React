import { connect } from 'react-redux';
import Header from './Header';
import {
    setPageSelected,
    setNavMenuShow
} from '../../Actions';

const mapStateToProps = (state) => ({
    pageSelected: state.routingReducer.pageSelected,
    navMenuShow: state.viewReducer.navMenuShow
});
  
const mapDispatchToProps = (dispatch) => {
    return {
        setPageSelected: (page) => dispatch(setPageSelected(page)),
        setNavMenuShow: (bool) => dispatch(setNavMenuShow(bool)) 
    };
};
  
const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
  
export default HeaderContainer;