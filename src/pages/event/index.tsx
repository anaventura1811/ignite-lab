import { Header } from '../../components/header'
import { Sidebar } from '../../components/sidebar'
import { Video } from '../../components/video';
import { useParams} from 'react-router-dom';

type Props = {}

export function Event({}: Props) {

  const { id } = useParams<{ id: string }>();

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        {id ? <Video lessonSlug={id} />
        : (
          <div className='flex-1'>
            Inserir call to action aqui
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  )
}
