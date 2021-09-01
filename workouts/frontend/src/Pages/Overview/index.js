import { connect } from 'react-redux';
import Overview from './Overview';
import {

} from '../../Actions';

const mapStateToProps = (state) => ({

});
  
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
  
const OverviewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Overview);
  
export default OverviewContainer;