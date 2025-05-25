import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
 


export default function NotFound() {
  return (
    <div className='text-center h-[100vh] pt-20'>
        <Image height={300} width={300} src='/notfound.png' alt='' className='mx-auto'/>
        <h1 className="text-customBlack font-bold text-2xl mt-5">Page non trouvée</h1>
        <p className="font-medium text-xl my-4 max-w-[600px] mx-auto">Nous ne trouvons pas la page que vous recherchez. Elle a peut-être été déplacée ou supprimée.</p>
        <Link href='/' className={`inline-flex hover:pl-4 transition-all rounded-3xl overflow-hidden gap-2 items-center w-fit p-4 my- px-4 bg-customBlack hover:bg-black group text-customWhite font-medium `}>
            Retournez à l'accueil
            <span className={`relative group-hover:left-1 left-0  transition-all`}>
                <IoIosArrowForward className=""/>
            </span>
            
        </Link>
    </div>
  )
}