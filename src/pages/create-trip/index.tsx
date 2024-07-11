import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
} from 'lucide-react';
import { useState } from 'react';
import { SelectInvities } from '../../components/select-invites';
import { CreateTravel } from '../../components/create-travel';

export function CreateTripPage() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

  function openGuestsInputOpen() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestModal() {
    setIsGuestsModalOpen(false);
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function clonseGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  return (
    <div className='h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center'>
      <div className='max-w-3xl w-full px-6 text-center space-y-10'>
        <div className='flex justify-center items-center flex-col gap-3'>
          <img src='/logo.svg' alt='Logo planner' title='Logo planner' />
          <p className='text-zinc-300 text-lg'>
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className='space-y-4'>
          <div className='px-4 h-16 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3'>
            <div className='flex items-center justify-between flex-1'>
              <div className='flex items-center gap-2'>
                <MapPin className='size-5 text-zinc-400' />
                <input
                  type='text'
                  placeholder='Para onde você vai?'
                  className='text-lg text-zinc-400 bg-transparent w-72 outline-none'
                  disabled={isGuestsInputOpen}
                />
              </div>
              <div className='flex items-center gap-2'>
                <Calendar className='size-5 text-zinc-400 ' />
                <input
                  type='text'
                  placeholder='Quando?'
                  className='text-lg text-zinc-400 bg-transparent outline-none w-28'
                  disabled={isGuestsInputOpen}
                />
              </div>
            </div>
            {isGuestsInputOpen ? (
              <button
                onClick={clonseGuestsInput}
                className='px-5 py-2 flex items-center gap-2 bg-zinc-800 rounded-lg hover:bg-zinc-900'
              >
                Alterar local/data <Settings2 className='size-5' />
              </button>
            ) : (
              <button
                onClick={openGuestsInputOpen}
                className='bg-lime-300 text-lime-900 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors duration-200 ease-in'
              >
                Continuar
                <ArrowRight className='size-5' />
              </button>
            )}
          </div>
          {isGuestsInputOpen && (
            <div className='px-4 h-16 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3'>
              <div className='flex items-center justify-between flex-1'>
                <button
                  type='button'
                  onClick={openGuestsModal}
                  className='flex items-center gap-2 text-zinc-400 hover:text-zinc-500 transition-colors'
                >
                  <UserRoundPlus className='size-5' />

                  <span className='text-lg'>Quem estará na viagem?</span>
                </button>
              </div>
              <button
                onClick={openConfirmTripModal}
                className='bg-lime-300 text-lime-900 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors duration-200 ease-in'
              >
                Confirmar viagem
                <ArrowRight className='size-5' />
              </button>
            </div>
          )}
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

      {isGuestsModalOpen && <SelectInvities onClose={closeGuestModal} />}

      {isConfirmTripModalOpen && (
        <CreateTravel onCLose={closeConfirmTripModal} />
      )}
    </div>
  );
}
