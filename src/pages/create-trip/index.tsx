import { FormEvent, useState } from 'react';
import { SelectInvitiesModal } from './select-invites';
import { CreateTripModal } from './create-travel';
import { useNavigate } from 'react-router-dom';
import { DestinationAndDateStep } from './steps/destination-and-date-step';
import { ConfirmStripStep } from './steps/invite-guests-step';

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

	function closeGuestsInput() {
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
					<DestinationAndDateStep
						closeGuestsInput={closeGuestsInput}
						isGuestsInputOpen={isGuestsInputOpen}
						openGuestsInputOpen={openGuestsInputOpen}
					/>
					{isGuestsInputOpen && (
						<ConfirmStripStep
							getEmailToInvite={getEmailToInvite}
							openConfirmTripModal={openConfirmTripModal}
							openGuestsModal={openGuestsModal}
						/>
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
