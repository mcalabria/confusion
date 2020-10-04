import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap'

export default class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        else
            return(
                <div></div>
            )
    }

    renderComments(comments) {
        return (
            <div>
                <h4> Comments </h4>
                <ul className="list-unstyled">
                    {
                        comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <div className="row">
                                        <div  className="col-12">
                                            {comment.comment}
                                        </div>
                                        <div  className="col-12">
                                            -- {comment.author}, {new Date(comment.date).toDateString()}
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                </div>           
            </div>
        )
    }
}