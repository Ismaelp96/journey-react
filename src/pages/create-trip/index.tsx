import {
	MapPin,
	Calendar,
	ArrowRight,
	UserRoundPlus,
	Settings2,
} from 'lucide-react';
import { FormEvent, useState } from 'react';
import { SelectInvitiesModal } from './select-invites';
import { CreateTripModal } from './create-travel';
import { useNavigate } from 'react-router-dom';

export function CreateTripPage() {
	const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
	const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
	const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

	const [getEmailToInvite, setGetEmailToInvite] = useState([
		'ismael6991@live.com',
	]);

	const navigate = useNavigate();

	function createTrip(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		navigate('/trips/123');
	}

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

	function removeEmailFromInvites(emailToRemove: string) {
		const newEmailList = getEmailToInvite.filter(
			(email) => email !== emailToRemove,
		);

		setGetEmailToInvite(newEmailList);
	}

	function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const email = data.get('email')?.toString();

		if (!email) {
			return;
		}

		if (getEmailToInvite.includes(email)) {
			return;
		}
		const newEmailList = [...getEmailToInvite, email];
		setGetEmailToInvite(newEmailList);

		event.currentTarget.reset();
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
								className='px-5 py-2 flex items-center gap-2 bg-zinc-800 rounded-lg hover:bg-zinc-900'>
								Alterar local/data <Settings2 className='size-5' />
							</button>
						) : (
							<button
								onClick={openGuestsInputOpen}
								className='bg-lime-300 text-lime-900 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors duration-200 ease-in'>
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
									className='flex items-center gap-2 text-zinc-400 hover:text-zinc-500 transition-colors'>
									<UserRoundPlus className='size-5' />

									<span className='text-lg'>Quem estará na viagem?</span>
								</button>
							</div>
							<button
								onClick={openConfirmTripModal}
								className='bg-lime-300 text-lime-900 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors duration-200 ease-in'>
								Confirmar viagem
								<ArrowRight className='size-5' />
							</button>
						</div>
					)}
				</div>
				<div>
					<p
						className='text-zinc-500 text-sm
          '>
						Ao planejar sua viagem pela plann.er você automaticamente concorda
					</p>
					<p
						className='text-zinc-500 text-sm
          '>
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

			{isGuestsModalOpen && (
				<SelectInvitiesModal
					getEmailToInvite={getEmailToInvite}
					removeEmailFromInvites={removeEmailFromInvites}
					closeGuestModal={closeGuestModal}
					addNewEmailToInvite={addNewEmailToInvite}
				/>
			)}

			{isConfirmTripModalOpen && (
				<CreateTripModal
					createTrip={createTrip}
					closeConfirmTripModal={closeConfirmTripModal}
				/>
			)}
		</div>
	);
}
