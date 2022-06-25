import { useNavigate } from 'react-router-dom';
import { useState, FormEvent, useMemo, useCallback, useEffect } from 'react';
import { Logo } from '../../components/logo';
import { useCreateSubscriberMutation, usePublishSubscriberMutation } from '../../graphql/generated';

type Props = {}

export function Subscribe({}: Props) {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  const [
    createSubscriber,
    { data, loading, error }
  ] = useCreateSubscriberMutation();

  const [publishSubscriber, { data: dSub}] = usePublishSubscriberMutation();

  const handleSubscribe = useCallback(async (ev: FormEvent) => {
  
    ev?.preventDefault();
    
    await createSubscriber({
      variables: {
        name,
        email
      },
      fetchPolicy: 'no-cache'
    });
  }, [name, email]);

  const userId = useMemo(() => {
    if (data
        && data.createSubscriber
        && data?.createSubscriber?.id
      ) {
      setId(data.createSubscriber.id);
      return data.createSubscriber.id;
    } else {
      return null;
    }
  }, [data]);

  useEffect(() => {
    let cancel = null;
    if (cancel === true) {
      return;
    }
    const publish = async () => {
      console.log('email', email);
      console.log('id', userId);
      if (userId && email) {
        await publishSubscriber({
          variables: {
            email,
            id: userId
          }
        });
        navigate('/event');
      }
    }

    publish().catch(e => console.log(e))
      return () => {
        cancel = true;
      } 
  }, [userId, email]);
 


  return (
    <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
      <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto'>
        <div className='max-w-[640px]'>
          <Logo />
          <h1 className='mt-8 text-[2.5rem] leading-tight'>
            Construa uma <strong className='text-blue-500'>aplicação completa</strong>, do zero, com <strong className='text-blue-500'>React JS</strong>
          </h1>
          <p className='mt-4 text-gray-200 leading-relaxed'>
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className='p-8 bg-gray-700 border border-gray-500 rounded'>
          <strong
            className='text-2xl mb-6 block'
          >
            Inscreva-se gratuitamente
          </strong>
          <form onSubmit={handleSubscribe} className='flex flex-col gap-2 w-full'>
            <input
              className='bg-gray-900 rounded px-5 h-14'
              type={'text'}
              placeholder='Seu nome completo'
              onChange={event => setName(event.target.value)}
            />
            <input
              className='bg-gray-900 rounded px-5 h-14'
              type={'text'}
              placeholder='Digite seu e-mail'
              onChange={event => setEmail(event.target.value)}
            />
            <button
              type='submit'
              disabled={loading}
              className='mt-4 bg-green-500 py-4 rounded font-bold text-sm uppercase hover:bg-green-700 transition-colors disabled:opacity-50'
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src='/src/assets/imgs/code-mockup.png' className='mt-10'/>
    </div>
  );
}