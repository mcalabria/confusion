import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap'

const  DishDetail = (props) => {
    if (props.dish != null)
        return(
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div  className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.dish.comments} />
                </div>           
            </div>
        )
    else
        return(
            <div></div>
        )
}

function RenderDish({dish}) {
    return(
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

function RenderComments({comments}) {
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


export default DishDetail;