/**
 * Created by WangCan on 2017/5/22.
 */

import React from "react";
import PropTypes from "prop-types";
import {Card, CardHeader, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Collection extends React.Component {
    render () {
        return <Card>
                <CardHeader title={this.props.data.author.name}
                subtitle={this.props.data.author.description}
                avatar={this.props.data.author.avatarUrl}/>
            <CardMedia overlay={
                <div>
                    <span>{this.props.data.name}</span>
                    <FlatButton
                        icon={<i className="material-icons">list</i>}/>
                    <FlatButton
                        icon={<i className="material-icons">list</i>}/>
                </div>
            }>
                <img src={this.props.data.imageUrl}/>
            </CardMedia>
        </Card>;
    }
}

Collection.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        name: PropTypes.string,
        author: PropTypes.shape({
            name:PropTypes.string.isRequired,
            avatarUrl: PropTypes.string,
            description: PropTypes.string
        })
    }).isRequired,
    clickView: PropTypes.func.isRequired,
    clickPlay: PropTypes.func.isRequired
};
