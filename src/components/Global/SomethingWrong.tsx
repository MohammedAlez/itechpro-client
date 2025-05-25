import Image from "next/image";


export function SomethingWrong(){


    return (
        <div className='text-center h-[100vh] pt-28 px-4'>
            <Image height={140} width={140} src='/error.png' alt='' className='mx-auto'/>
            <h1 className="text-customBlack font-bold text-2xl mt-5">Une erreur est survenue.</h1>
            <p className="font-medium text-xl my-4 max-w-[600px] mx-auto">Une erreur inattendue s'est produite. Veuillez réessayer plus tard.</p>
        </div>
    )
}