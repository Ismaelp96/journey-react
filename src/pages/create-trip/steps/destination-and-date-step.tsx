import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react';

type DestinationAndDateStepProps = {
	isGuestsInputOpen: boolean;
	openGuestsInputOpen: () => void;
	closeGuestsInput: () => void;
};

export function DestinationAndDateStep({
	isGuestsInputOpen,
	closeGuestsInput,
	openGuestsInputOpen,
}: DestinationAndDateStepProps) {
	return (
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
					onClick={closeGuestsInput}
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
	);
}
