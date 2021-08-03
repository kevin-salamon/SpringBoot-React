import { connect } from 'react-redux';
import Routing from './Routing';
import {

} from '../../Actions';

const mapStateToProps = (state) => ({

});
  
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
  
const RoutingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Routing);
  
export default RoutingContainer;