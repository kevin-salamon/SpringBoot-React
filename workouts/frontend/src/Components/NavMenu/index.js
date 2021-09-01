import { connect } from 'react-redux';
import NavMenu from './NavMenu';
import {
    setNavMenuShow
} from '../../Actions';

const mapStateToProps = (state) => ({
    navMenuShow: state.viewReducer.navMenuShow
});
  
const mapDispatchToProps = (dispatch) => {
    return {
        setNavMenuShow: (bool) => dispatch(setNavMenuShow(bool)) 
    };
};
  
const NavMenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavMenu);
  
export default NavMenuContainer;