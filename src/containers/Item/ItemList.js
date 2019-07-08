import React, { Component } from 'react';
import { bindActionCreators } from'redux';
import { connect } from 'react-redux';

import ItemListComponent from '../../components/Item/ItemList';

import * as ItemActions from '../../reducers/modules/item';

export class ItemListContainer extends Component {
    componentWillMount() {
        console.log('ItemListContainer will mount');
        this.props.itemActions.get();
    }

    render() {
        return (
            <ItemListComponent itemData={this.props.itemData}
                               itemCount={this.props.showCount}
                               screenProps={this.props.screenProps}/>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    itemData: state.item.get('data'),
    showCount: ownProps.showCount,
    screenProps: ownProps.screenProps
});

const mapDispatchToProps = (dispatch) => ({
    itemActions: bindActionCreators(ItemActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemListContainer)