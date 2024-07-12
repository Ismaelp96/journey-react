import { AtSign, PhoneCall, PlusIcon, Users, XIcon } from 'lucide-react';
import { FormEvent } from 'react';

export type SelectInvitiesProps = {
	addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
	closeGuestModal: () => void;
	getEmailToInvite: string[];
	removeEmailFromInvites: (email: string) => void;
};

export function SelectInvitiesModal({
	addNewEmailToInvite,
	closeGuestModal,
	getEmailToInvite,
	removeEmailFromInvites,
}: SelectInvitiesProps) {
	return (
		<div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
			<div className='w-full max-w-[640px] shadow-shape rounded-xl bg-zinc-900 py-5 px-6 space-y-5'>
				<div className='space-y-2'>
					<div className='flex justify-between items-center w-full'>
						<h2 className='text-lg font-semibold'>Selecionar convidados</h2>
						<button type='button' onClick={closeGuestModal}>
							<XIcon className='size-5 text-zinc-400 hover:text-zinc-500 transition-colors duration-200' />
						</button>
					</div>
					<p className='text-sm text-zinc-400'>
						Os convidados irão receber e-mails para confirmar a participação na
						viagem
					</p>
				</div>

				<div className='flex flex-wrap gap-2 w-full'>
					{getEmailToInvite.map((email, i) => {
						return (
							<div
								key={i}
								className='py-2.5 px-4 rounded-md bg-zinc-800 flex flex-col gap-2'>
								<div className='flex items-center gap-2'>
									<span className='text-zinc-300'>{email}</span>
									<button
										type='button'
										onClick={() => removeEmailFromInvites(email)}>
										<XIcon className='size-4 text-zinc-400 hover:text-zinc-500 transition-colors duration-200' />
									</button>
								</div>
							</div>
						);
					})}
				</div>
				<div className='w-full h-px bg-zinc-800' />

				<form
					onSubmit={addNewEmailToInvite}
					className='w-full flex flex-col gap-4'>
					<div className='p-2.5 w-full flex flex-col items-center justify-center rounded-lg bg-zinc-950 border border-zinc-800'>
						<div className='flex flex-col gap-6 w-full bg-zinc-950'>
							<div className='flex items-center gap-2 flex-1 border-b border-zinc-800 pb-2'>
								<AtSign className='text-zinc-400 size-5' />
								<input
									type='email'
									name='email'
									placeholder='Digite o e-mail do convidado'
									className='text-lg text-zinc-400 bg-zinc-950  outline-none w-80'
								/>
							</div>
							<div className='flex items-center gap-2 flex-1 border-b border-zinc-800 pb-2'>
								<Users className='text-zinc-400 size-5' />
								<input
									type='text'
									name='name'
									placeholder='Nome'
									className='text-lg text-zinc-400 bg-zinc-950 outline-none w-80'
								/>
							</div>
							<div className='flex items-center gap-2 flex-1'>
								<PhoneCall className='text-zinc-400 size-5' />
								<input
									type='tel'
									name='tel'
									id='tel'
									placeholder='Número para contato'
									className='text-lg text-zinc-400 bg-zinc-950 outline-none w-80'
								/>
							</div>
						</div>
					</div>
					<button
						type='submit'
						className='bg-lime-300 text-lime-900 px-5 py-2 rounded-lg font-medium flex self-end items-center gap-2 hover:bg-lime-400 transition-colors duration-200 ease-in'>
						Convidar
						<PlusIcon className='size-5' />
					</button>
				</form>
			</div>
		</div>
	);
}
