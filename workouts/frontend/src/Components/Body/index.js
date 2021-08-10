import { connect } from 'react-redux';
import Body from './Body';
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
  
const BodyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Body);
  
export default BodyContainer;