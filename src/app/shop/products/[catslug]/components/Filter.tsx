'use client'

import React, { useEffect, useState } from 'react'
import { IoFilter } from 'react-icons/io5'
import { LuSearch } from 'react-icons/lu'
import { MdClose } from 'react-icons/md'

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';



export type FilterOptions = {
    searchQuery:string,
    priceRange:{
        min:number,
        max?:number
    }
}
export const initialFilterOptions:FilterOptions = {
    searchQuery:'',
    priceRange:{
        min:0,
    }
}

type Props = {
    filterOptions:FilterOptions, 
    setFilterOptions:React.Dispatch<React.SetStateAction<FilterOptions>>,
    isRefetching:boolean
}
export default function Filter({filterOptions, setFilterOptions, isRefetching}:Props) {

    const [searchText, setSearchText] = useState('')
    const [priceRange, setPriceRange] = useState<[number, number]>([filterOptions.priceRange.min, filterOptions.priceRange?.max || 500000]);
    // console.log(priceRange)
    const [filterDialog, setFilterDialog] = useState(false)


    const setSearchValue=()=>{
        setFilterOptions(state=>{
            return {
                ...state, 
                searchQuery:searchText
            } 
        })
    }

    const resetFilter=()=>{
        setFilterDialog(false)
        setPriceRange([0,500000])
        setFilterOptions(state=>{
            return {
                ...state,
                priceRange:{
                    min:0,
                    max:500000
                }
            }
        })
    }

    


    const applyFilter=()=>{
        setFilterDialog(false)
        setFilterOptions(state=>{
            return {
                ...state,
                priceRange:{
                    min:priceRange[0],
                    max:priceRange[1]
                }
            }
        })
    }

    
    
    return (
        <div className="my-10 mt-16 flex justify-between items-center gap-3 ">
            <button onClick={()=>setFilterDialog(true)} className="p-3 px-4 rounded-2xl md:rounded-3xl h-[48px] md:h-[59px] bg-gray-200 text-sm md:text-base md:font-medium flex gap-2 items-center justify-center">
                Filter
                <IoFilter size={20}/>
            </button>
            <div className="flex bg-gray-200  rounded-2xl md:rounded-3xl p-1 md:p-2 md:px-2">
                <input  value={searchText} onChange={(e)=>setSearchText(e.target.value)} type="text" className="max-w-[170px] sm:min-w-[280px] md:focus:min-w-[400px] transition-all text-sm sm:text-base bg-transparent outline-none px-2" placeholder='search for products'/>
                <button onClick={setSearchValue} className={`${searchText.length!==0 ? 'bg-gray-800 text-white' : ''}  w-[40px] h-[40px] md:w-[43px] md:h-[43px] bg-gray-8d00 flex items-center justify-center rounded-2xl md:rounded-[20px]`}>
                    {/* {!isRefetching
                    ? */}
                        <LuSearch size={22} />
                    {/* // :
                    //     <div role="status" className='w-1/2 -ml-[1px]'>
                    //         <svg aria-hidden="true" className="w-full h-1/2 text-gray-200 animate-spin dark:text-gray-400 fill-customBlack" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    //             <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    //             <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    //         </svg>
                    //         <span className="sr-only">Loading...</span>
                    //     </div>
                    // } */}

                </button>
            </div>

            {filterDialog && <div className={`bg-black opacity-30 fixed top-0 left-0 w-full h-[100vh] z-40`} />}

            <div className={`fixed min-w-[350px] max-w-[500px] w-full p-10 px-6 rounded-2xl bg-gray-100 z-40  left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ${filterDialog ? 'bottom-[10%] opacity-100' : 'bottom-[5%] opacity-0 pointer-events-none'}`}>
                <div className="flex justify-between  mb-6">
                    <h2 className="font-bold text-3xl text-gray-700">Filter</h2>
                    <button onClick={()=>setFilterDialog(!filterDialog)} className="flex items-center justify-center rounded-xl w-8 h-8 bg-gray-200 hover:bg-gray-300 transition ">
                        <MdClose size={23}/>
                    </button>
                </div>
                <div className="">
                        <div className="">
                            <label htmlFor="" className='block mb-3 font-medium'>Price</label>
                            <div className="">
                                <div className="flex justify-between mb-2 px-2">
                                    <span className="">{priceRange[0]} DA</span>
                                    <span className="">{priceRange[1]} DA</span>
                                </div>
                                <RangeSlider defaultValue={[200000, 400000]} value={priceRange} min={0} max={500000} step={1000} onInput={(e)=>{setPriceRange(e)}} />
                            </div>
                        </div>
                </div>
                <div className="flex justify-end mt-14 gap-3">
                    <button onClick={resetFilter} className={`inline-flex justify-center hover:pl-4 transition-all rounded-3xl overflow-hidden gap-2 items-center w-fit p-4 my- px-4 bg-gray-200 hover:bg-gray-300 text-customBlack font-medium `}>
                        Réinitialiser
                    </button>
                    <button onClick={applyFilter} className={`inline-flex justify-center hover:pl-4 transition-all rounded-3xl overflow-hidden gap-2 items-center w-fit p-4 my- px-4 bg-customBlack hover:bg-black group text-customWhite font-medium `}>
                        Appliquer
                    </button>
                </div>
            </div>
        </div>
    )
}
