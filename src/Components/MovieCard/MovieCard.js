import React from 'react'
import {Card, Button} from 'react-bootstrap';
import './MovieCard.css';
import MovieRating from '../Rating/Rating';
import {Link} from 'react-router-dom'

const MovieCard = ({movie}) => {
        return (<div className='card-movie'>
            <Card style={
                {width: '18rem'}
            }>
                <Card.Img variant="top"
                    src={
                        movie.posterUrl
                    }/>
                <Card.Body>
                    <Card.Title>{
                        movie.title
                    }</Card.Title>
                    <Card.Text className='desc'>
                        {
                        movie.description
                    }</Card.Text>
                    <Card.Text>{
                        movie.rate
                    }</Card.Text>
                    <MovieRating isMovieRating={true}
                        movieRating={
                            movie.rate
                        }/>
                    <div>
                        <Button className='trailer'>
                            <a href={
                                    movie.trailer
                                }
                                target
                                ={"blanck"}>
                                Trailer
                            </a>
                        </Button>
                        <Link to ={`/${movie.id}`}>
                        <Button>
                            Description
                        </Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    </div>
    );
};

export default MovieCard
