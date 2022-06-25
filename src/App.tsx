import { gql, useQuery } from '@apollo/client';
import { Event } from './pages/event';
import { Router } from './routes/router';
import { client } from './lib/apollo';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

// const GET_LESSONS_QUERY = gql`
//   query {
//     lessons {
//       id 
//       title
//     }
//   }
// `;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  // const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  // console.log('data: ', data);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>

  )
}

export default App
