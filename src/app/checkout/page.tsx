'use client'

import Link from "next/link"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/state/store"
// import { usePlaceOrder } from "../../../lib/api"
import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { resetCart } from "@/state/Cart/cartSlice"
import LoadingSpinner from "@/components/Global/Loader/LoadingSpinner"
import { usePlaceOrder } from "@/hooks/usePlaceOrder"
import { IoIosArrowForward } from "react-icons/io"
import wilayat from '@/data/WilayaList.json'

const initialState:UserInfo = {
    full_name:'',
    // email:'', 
    phone_number:'',
    wilaya:'',
    city:'',
    address:'',
    note:'',
}


export default function Page(){

    
    const dispatch = useDispatch();
    const cart = useSelector((cart:RootState)=>cart.cart);
    let total = cart.reduce((prev,current)=>{
        return prev + current.price*current.quantity
    },0)

    const [isSuccess, setIsSuccess] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [isError, setIsError] = useState(false)
    // const {mutate, data,error , isError} = usePlaceOrder();
    // console.log(wilayat)
    const [cities, setCities] = useState<string[]>([])
    // console.log(cities);
    // const isPending = true
    const formik = useFormik({
        initialValues:initialState,
        validationSchema:Yup.object({
            full_name:Yup.string().required('Le prénom et le nom sont requis'),
            // email:Yup.string().required('Email est requis').email('Email invalide'),
            phone_number:Yup.string().required('Le numéro de téléphone est requis'),
            wilaya:Yup.string().required("L'Wilaya est requis"),
            city:Yup.string().required("La ville est requis"),
            address:Yup.string().required("L'address est requis"),
            note:Yup.string().optional()
        }),
        onSubmit:async(values)=>{
            const total_price = total
            // mutate({/cart, userInfo:values, total_price})
            await new Promise((res, _)=>{
                setIsPending(true)
                setTimeout(()=>{
                    setIsSuccess(true)
                    setIsPending(false)
                    res(true)
                },2000)
            })
            
        }
    })
    
    if(isSuccess){
        dispatch(resetCart())
        // console.log('Successed');
        window.scroll({
            top:0
        })
    }

    return (
        <div className="">
            {isSuccess 
            ?
            <div className="flex py-[20px] mb-56 flex-col items-center gap-2">
                <div className="w-[100px] h-[100px] relative mb-3">
                    <Image  src='/place-order.gif' alt='' fill/>
                </div>
                <h1 className="font-bold text-2xl ">Commande confirmée</h1>
                <p className="text-gray-700 text-center md:max-w-[650px] mb-3">
                    Votre commande a été passée avec succés
                </p>
                <Link href='/shop2' className={`inline-flex hover:pl-4 transition-all rounded-3xl overflow-hidden gap-2 items-center w-fit p-4 my- px-4 bg-primary hover:opacity-70 group text-customWhite font-medium `}>
                    Continuer vos achats
                    <span className={`relative group-hover:left-1 left-0  transition-all`}>
                        <IoIosArrowForward className=""/>
                    </span>
                    
                </Link>
            </div>
            :
            cart.length 
            ?
            <div className="flex gap-4 flex-col lg:flex-row">
                {/* user info */}
                <div className="flex-1 flex-col flex gap-4 ">
                    <div className="border p-5 rounded-2xl">
                        <h2 className="font-medium text-xl mb-5">Détails de la livraison</h2>
                        <form action="" className="flex flex-col gap-3">
                            <div className="flex gap-2 flex-col md:flex-row">
                                <div className="flex gap-2 flex-col flex-1">
                                    <label htmlFor="full-name" className="ml-1">Prénom et le Nom<span className='text-red-600'>*</span></label>
                                    <input
                                        value={formik.values.full_name}
                                        onChange={formik.handleChange}
                                        name="full_name" id='full-name' type="text" className="outline-none p-2 px-3 border rounded-xl" placeholder='Prénom'/>
                                    {formik.errors.full_name && formik.touched.full_name && 
                                        <span className='text-sm font-medium -mt-1 text-red-500 inline-block ml-3 '>{formik.errors.full_name}</span>
                                    }
                                </div>
                            </div>
                            {/* <div className="flex gap-2 flex-col flex-1">
                                <label htmlFor="email" className="ml-1">Email<span className='text-red-600'>*</span></label>
                                <input 
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    name='email' id='email' type="email" className="outline-none p-2 px-3 border rounded-xl" placeholder="Email"/>
                                    {formik.errors.email && formik.touched.email && 
                                        <span className='text-sm font-medium -mt-1 text-red-500 inline-block ml-3 '>{formik.errors.email}</span>
                                    }
                            </div> */}
                            <div className="flex gap-2 flex-col flex-1">
                                <label htmlFor="phone-number" className="ml-1">Numéro de téléphone<span className='text-red-600'>*</span></label>
                                <input
                                    value={formik.values.phone_number}
                                    onChange={formik.handleChange} 
                                    name="phone_number" id='phone-number' type="text" className="outline-none p-2 px-3 border rounded-xl" placeholder='Numéro de téléphone'/>
                                    {formik.errors.phone_number && formik.touched.phone_number && 
                                        <span className='text-sm font-medium -mt-1 text-red-500 inline-block ml-3 '>{formik.errors.phone_number}</span>
                                    }
                            </div>
                            <div className="flex gap-2 flex-col flex-1">
                                <label htmlFor="address" className="ml-1">Wilaya<span className='text-red-600'>*</span></label>
                                <select 
                                    onChange={(event)=>{
                                        formik.handleChange(event)
                                        const wilaya = wilayat.find(e=> e.code + ' - ' + e.name == event.target.value)
                                        // console.log(wilaya)
                                        setCities(wilaya?.dairas || [])
                                        formik.setFieldValue('city', '')
                                        // here we should modify the city in formkik values 
                                    }} 
                                    name='wilaya' 
                                    value={formik.values.wilaya} 
                                    className="outline-none p-2 px-3 border rounded-xl" 
                                >
                                    <option value='' disabled>Choiser la wilaya</option>
                                    {wilayat.map(w=>{
                                        return (
                                            <option key={w.code} value={w.code + ' - ' + w.name} className=""
                                            >
                                                {w.code + ' - ' + w.name}
                                            </option>
                                        )
                                    })}
                                </select>
                                {formik.errors.wilaya && formik.touched.wilaya && 
                                    <span className='text-sm font-medium -mt-1 text-red-500 inline-block ml-3 '>{formik.errors.wilaya}</span>
                                }
                            </div>
                            <div className="flex gap-2 flex-col flex-1">
                                <label htmlFor="address" className="ml-1">La Ville<span className='text-red-600'>*</span></label>
                                <select onChange={formik.handleChange} name='city' value={formik.values.city} className="outline-none p-2 px-3 border rounded-xl" >
                                    <option value='' disabled>Choiser la ville</option>
                                    {cities.map(c=>{
                                        return (
                                            <option key={c} value={c} className="">{c}</option>
                                        )
                                    })}
                                </select>
                                {formik.errors.city && formik.touched.city && 
                                    <span className='text-sm font-medium -mt-1 text-red-500 inline-block ml-3 '>{formik.errors.city}</span>
                                }
                            </div>
                            
                            <div className="flex gap-2 flex-col flex-1">
                                <label htmlFor="address" className="ml-1">Address<span className='text-red-600'>*</span></label>
                                <input 
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    name='address' id='address' type="text" className="outline-none p-2 px-3 border rounded-xl" placeholder="Address"/>
                                    {formik.errors.address && formik.touched.address && 
                                        <span className='text-sm font-medium -mt-1 text-red-500 inline-block ml-3 '>{formik.errors.address}</span>
                                    }
                            </div>
                            <div className="flex gap-2 flex-col flex-1">
                                <label htmlFor="note" className="ml-1">Remarque<span className='text-[12px] text-gray-600 font-bold'> (FACULTATIF)</span></label>
                                <textarea 
                                    value={formik.values.note}
                                    onChange={formik.handleChange}
                                    name="note" id='note' className="rounded-xl outline-none p-2 px-3 border resize-none min-h-24" placeholder="Remarque sur la commande"/>
                            </div>
                        </form>
                    </div>
                </div>
                {/* total pricing  */}
                <div className="border rounded-2xl p-5 max-w-[450px] w-full sm:min-w-[400px] gap-6 flex flex-col justify-between">
                    <div className="">
                        <h2 className="font-medium text-xl mb-3">TOTAUX DU PANIER</h2>
                        <div className="flex justify-between mb-1">
                            <span className="block text-gray-700">Prix de prodiuts</span>
                            <span className="block text-green-600 ">{total}DA</span>
                        </div>
                        {/* <div className="flex justify-between ">
                            <span className="block text-gray-700">Livraison</span>
                            <span className="block text-green-600 ">200DA</span>
                        </div> */}
                        <div className="my-4 bg-gray-500 w-full h-[1px]"/>
                        <div className="flex justify-between ">
                            <span className="block text-gray-700">Total</span>
                            {/* <span className="block text-green-600 ">{total+200}DA</span> */}
                            {<div className="flex gap-2 items-end">
                                <span className="block text-green-600 ">
                                    {total}DA
                                </span>
                            </div>}
                        </div>
                    </div>
                    <div className="">
                        {isError && !isPending &&  <span className="text-sm mb-2 text-red-500 font-bold block ml-2 mt-1">Une erreur s&#39;est produite, Réessayez plus tard</span>}
                        {/* <Link href='/checkout' className="w-full text-center p-3 rounded-2xl px-3 bg-customBlack hover:opacity-90 transition text-white">Passer à la chaisse</Link> */}
                        <button disabled={isPending} onClick={()=>formik.submitForm()} className={` h-[45px] flex justify-center items-center w-full text-center p-3 rounded-2xl px-3 bg-primary hover:opacity-70 transition text-white ${isPending && 'opacity-70'} text-white`}>
                            {isPending 
                            ? 
                                <div role="status  ">
                                    <svg aria-hidden="true" className={`w-5 h-5 text-gray-200 animate-spin dark:text-gray-400 fill-gray-400`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            : 'Passer la commande'
                            }
                        </button>
                    </div>

                </div>
            </div>
            :
            <div className="flex flex-col gap-2 items-center mb-60 mt-10">
                <div className='relative w-[150px] h-[150px] '>
                    <Image src='/empty-cart.png' alt='' fill/>
                </div>
                <h1 className="text-lg  sm:text-xl font-bold">Votre Panier est Vide</h1>
                <p className="text-gray-700 text-center md:max-w-[650px]">
                    Votre panier est actuellement vide. Parcourez notre collection pour découvrir de superbes produits et commencez à les ajouter à votre panier. Bon shopping !
                </p>
                <Link href='/shop2' className={`inline-flex hover:pl-4 transition-all rounded-3xl overflow-hidden gap-2 items-center w-fit p-4 my-3 px-4 bg-primary hover:opacity-70 group text-customWhite font-medium `}>
                    Achetez maintenant
                    <span className={`relative group-hover:left-1 left-0  transition-all`}>
                        <IoIosArrowForward className=""/>
                    </span>
                    
                </Link>
            </div>
            }
        </div>
    )
}