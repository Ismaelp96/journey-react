import { MapPin, Calendar, ArrowRight } from 'lucide-react';

export function App() {
  return (
    <div className='h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center'>
      <div className='max-w-3xl w-full px-6 text-center space-y-10'>
        <div className='flex justify-center items-center flex-col gap-3'>
          <img src='/logo.svg' alt='Logo planner' title='Logo planner' />
          <p className='text-zinc-300 text-lg'>
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className='px-4 h-16 bg-zinc-900 rounded-xl flex items-center shadow-shape'>
          <div className='flex items-center justify-between flex-1'>
            <div className='flex items-center gap-2'>
              <MapPin className='size-5 text-zinc-400' />
              <input
                type='text'
                placeholder='Para onde você vai?'
                className='text-lg text-zinc-400 bg-transparent w-72 outline-none'
              />
            </div>
            <div className='flex items-center gap-2'>
              <Calendar className='size-5 text-zinc-400 ' />
              <input
                type='text'
                placeholder='Quando?'
                className='text-lg text-zinc-400 bg-transparent outline-none w-28'
              />
            </div>
          </div>
          <button className='bg-lime-300 text-lime-900 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors duration- ease-in'>
            Continuar
            <ArrowRight className='size-5' />
          </button>
        </div>
        <div>
          <p
            className='text-zinc-500 text-sm
        '
          >
            Ao planejar sua viagem pela plann.er você automaticamente concorda
          </p>
          <p
            className='text-zinc-500 text-sm
        '
          >
            com nossos{' '}
            <a href='#' className='text-zinc-300 underline'>
              termos de uso
            </a>{' '}
            e{' '}
            <a href='#' className='text-zinc-300 underline'>
              políticas de privacidade.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
