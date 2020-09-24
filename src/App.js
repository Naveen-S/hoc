import React from 'react';
import UserList from './userList';
import PostList from './postList';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserList isLoading={true}/>
      <PostList dataSource='https://jsonplaceholder.typicode.com/posts/1' />
    </div>
  );
}

export default App;
