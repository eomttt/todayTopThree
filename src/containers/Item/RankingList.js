import React, { Component } from 'react';
import { bindActionCreators } from'redux';
import { connect } from 'react-redux';

import RankingListComponent from '../../components/Item/RankingList';

import * as ItemActions from '../../reducers/modules/item';

export class RankingListContainer extends Component {
    componentWillMount() {
        console.log('RankingListContainer will mount');
        this.props.itemActions.get();
    }

    render() {
        return (
            <RankingListComponent ranking={this.props.itemData.ranking}
                                  screenProps={this.props.screenProps}/>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    itemData: state.item.get('data'),
    screenProps: ownProps.screenProps
});

const mapDispatchToProps = (dispatch) => ({
    itemActions: bindActionCreators(ItemActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RankingListContainer)