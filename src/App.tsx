import { gql, useQuery } from '@apollo/client';
import { Event } from './pages/event';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id 
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  console.log('data: ', data);

  return (
    <>
      <Event />
    </>

  )
}

export default App
