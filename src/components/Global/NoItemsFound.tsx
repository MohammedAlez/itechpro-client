import Image from "next/image";


export function NoItemsFound(){


    return (
        <div className='text-center h-[calc(100vh-300px)] pt-28 px-4'>
            <Image height={180} width={180} src='/empty-box.png' alt='' className='mx-auto'/>
            <h1 className="text-customBlack font-bold text-2xl mt-5">Désolé, aucun résultat n&apos;a été trouvé.</h1>
        </div>
    )
}