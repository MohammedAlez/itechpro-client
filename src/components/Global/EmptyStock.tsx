import Image from "next/image";


export function EmptyStock(){


    return (
        <div className='text-center h-[100vh] pt-28 px-4'>
            <Image height={140} width={140} src='/error.png' alt='' className='mx-auto'/>
            <h1 className="text-customBlack font-bold text-2xl mt-5">Aucun article</h1>
        </div>
    )
}