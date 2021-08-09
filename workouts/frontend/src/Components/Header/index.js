import { connect } from 'react-redux';
import Header from './Header';
import {

} from '../../Actions';

const mapStateToProps = (state) => ({

});
  
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
  
const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
  
export default HeaderContainer;