/* import React, {Component} from 'react';
import './Feed.css';
import "./Post.css";


class TweetComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {tweet: []};
    }

    componentDidMount() {
        fetch('http://localhost:8080/tweet')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    tweet : responseData
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        const tableRows = this.state.tweet.map((tweet) =>
            <tr key={tweet.id}>
                <td>{tweet.user}</td>
                <td>{tweet.text}</td>
                <td>{tweet.createdAt}</td>
                <td>{tweet.updatedAt}</td>
            </tr>
        );
        return (
            <div className="feed">
                <table>
                    <tbody>{tableRows}</tbody>
                </table>
                </div>
        );
    }
}
    

export default TweetComponent; */