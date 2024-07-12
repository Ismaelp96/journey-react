import { ArrowRight, UserRoundPlus } from 'lucide-react';

type ConfirmStripStepProps = {
	openGuestsModal: () => void;
	openConfirmTripModal: () => void;
	getEmailToInvite: string[];
};

export function ConfirmStripStep({
	openGuestsModal,
	openConfirmTripModal,
	getEmailToInvite,
}: ConfirmStripStepProps) {
	return (
		<div className='px-4 h-16 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3'>
			<div className='flex items-center justify-between flex-1'>
				<button
					type='button'
					onClick={openGuestsModal}
					className='flex items-center gap-2 text-zinc-400 hover:text-zinc-500 transition-colors'>
					<UserRoundPlus className='size-5' />

					{getEmailToInvite.length > 0 ? (
						<span className='text-zinc-100 text-lg flex-1'>
							{getEmailToInvite.length} pessoa(s) convidado(s)
						</span>
					) : (
						<span className='text-zinc-400 text-lg flex-1'>
							Quem estará na viagem?
						</span>
					)}
				</button>
			</div>
			<button
				onClick={openConfirmTripModal}
				className='bg-lime-300 text-lime-900 px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors duration-200 ease-in'>
				Confirmar viagem
				<ArrowRight className='size-5' />
			</button>
		</div>
	);
}
