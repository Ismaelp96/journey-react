import { Calendar, MapPin, Plus, Settings2 } from 'lucide-react';

export function TripDetailsPage() {
	return (
		<div className='px-5 py-10 bg-zinc-950 w-full max-w-[1100px] space-y-8 mx-auto'>
			{/* header  */}
			<div className='bg-zinc-900 px-4 py-5 flex items-center justify-between rounded-lg '>
				<div className='flex items-center gap-2'>
					<MapPin className='size-5 text-zinc-400 ' />
					<span className='text-zinc-100 text-lg'>Florianópolis, Brasil</span>
				</div>
				<div className='flex items-center gap-2 '>
					<Calendar className='size-5 text-zinc-400 ' />
					<input
						type='text'
						placeholder='Quando?'
						className='text-lg text-zinc-400 bg-transparent outline-none w-40'
					/>
					<button className='px-5 py-2 flex items-center gap-2 bg-zinc-800 rounded-lg hover:bg-zinc-900'>
						Alterar local/data <Settings2 className='size-5' />
					</button>
				</div>
			</div>
			{/* main  */}
			<div>
				<div className='w-full max-w-[668px] flex items-center justify-between'>
					<h1 className='text-zinc-50 text-4xl font-semibold'>Atividades</h1>
					<button
						type='button'
						className='text-lime-950 bg-lime-300 hover:bg-lime-400 transition-colors duration-200 flex items-center justify-center gap-2 px-5 py-3 rounded-lg'>
						<Plus className='size-5' />
						Cadastrar atividade
					</button>
				</div>
			</div>
		</div>
	);
}
