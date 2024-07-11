import { Mail, User, XIcon } from 'lucide-react';

type CreateTravelProps = {
  onCLose: () => void;
};

export function CreateTravel({ onCLose }: CreateTravelProps) {
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-full max-w-[640px] shadow-shape rounded-xl bg-zinc-900 py-5 px-6 space-y-5'>
        <div className='space-y-4'>
          <div className='flex justify-between items-center w-full'>
            <h2 className='text-lg font-semibold'>
              Confirmar criação da viagem
            </h2>
            <button type='button' onClick={onCLose}>
              <XIcon className='size-5 text-zinc-400 hover:text-zinc-500 transition-colors duration-200' />
            </button>
          </div>
          <p className='text-sm text-zinc-400'>
            Para concluir a criação de viagem para{' '}
            <span className='text-zinc-100 font-semibold'>Florianópolis</span>,
            Brasil nas datas de{' '}
            <span className='text-zinc-100 font-semibold'>
              16 a 27 de Agosto de 2024
            </span>{' '}
            preencha seus dados abaixo:
          </p>
        </div>

        <form className='w-full flex flex-col gap-4'>
          <div className='space-y-3'>
            <div className='flex items-center gap-2 flex-1 h-14 px-4 w-full rounded-lg bg-zinc-950'>
              <User className='text-zinc-400 size-5' />
              <input
                type='text'
                name='name'
                placeholder='Seu Nome completo'
                className='text-lg text-zinc-400 bg-zinc-950 outline-none w-80'
              />
            </div>
            <div className='flex items-center gap-2 flex-1 h-14 px-4 w-full rounded-lg bg-zinc-950'>
              <Mail className='text-zinc-400 size-5' />
              <input
                type='email'
                name='email'
                placeholder='Seu e-mail pessoal'
                className='text-lg text-zinc-400 bg-zinc-950  outline-none w-80'
              />
            </div>
          </div>
          <button
            type='submit'
            className='bg-lime-300 text-lime-900 px-5 h-11 rounded-lg font-medium flex justify-center items-center gap-2 hover:bg-lime-400 transition-colors duration-200 ease-in'
          >
            Confirmar criação da viagem
          </button>
        </form>
      </div>
    </div>
  );
}
