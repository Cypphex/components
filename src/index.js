import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <Comment
                    avatar={faker.image.avatar()}
                    author={faker.name.firstName()}
                    date="Today at 1:00PM"
                    text="Hello world!!" />
            </ApprovalCard>
            <ApprovalCard>
                <Comment
                    avatar={faker.image.avatar()}
                    author={faker.name.firstName()}
                    date="Today at 8:00AM"
                    text="Good morning!" />
            </ApprovalCard>
            <ApprovalCard>
                <Comment
                    avatar={faker.image.avatar()}
                    author={faker.name.firstName()}
                    date="Today at 5:00PM"
                    text="Good evening!" />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);