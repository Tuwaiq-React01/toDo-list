import { Component } from "react";
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';

class Info extends Component {
    constructor() {
        super()
        this.state = {
        data: [],
        loading: true,
              };
          }

        async componentDidMount() {
        const movies = await fetch('/react/movie/src/data.json');
        const moviesJSON = await movies.json();
            
        if (moviesJSON) {
        this.setState({
        data: moviesJSON,
        loading: false,
         });
        }
        }
    render() {
        const { data, loading } = this.state;
 
     if (loading) {
     return <div>Loading...</div>
     }
     return (
    <div class='row'>
    {data.map(movie => <div class='col-sm-2'><Card key={ movie.id } movie={ movie }/>
    </div>

   )}
</div>
);
}
}

export default Info;
