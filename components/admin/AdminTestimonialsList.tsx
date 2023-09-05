import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";

const AdminTestimonialsList = () => {
    const [testimonials, setTestimonials] = useState(null);
    const [loading, setLoading] = useState(false);
  return (
    <div>
        <AdminLayout>
            <div
            className='text-center'
            >
                <h3
                    className='font-bold text-2xl mt-12'
                    >
                    Відгуки
                </h3>
                <div>
                    <div className='flex flex-col gap-3 mt-12 mb-12'>
                            <div className='flex items-center justify-center'>
                                <div className=''>
                                    <div>
                                        <Link 
                                            className='bg-[#408692] text-white py-2 px-2 text-base font-semibold rounded-md
                                            hover:bg-[#33707a] duration-300'
                                            href="/admin/travel/new"
                                        >
                                            Додати новий відгук
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center mt-5'>
                                <TableContainer className='max-w-[800px]' component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow
                                            className=''
                                            >
                                                <TableCell className='font-semibold'>Testimonial</TableCell>
                                                <TableCell className='font-semibold' align="right">Delete</TableCell>
                                                <TableCell className='font-semibold' align="right">Edit</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {!loading ? testimonials?.map(testimonial => (
                                                <TableRow
                                                    key={testimonial?._id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                <TableCell align="right">
                                                    <Image src={testimonial?.img} alt="travelImg" width={40} height={40}/>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Link 
                                                    className='bg-[#408692] text-white p-1 px-1 text-base font-semibold
                                                    hover:bg-[#33707a] duration-300 flex gap-1 items-center justify-center'
                                                    href={`/admin/testimonial/delete/${testimonial._id}`}>
                                                        <BsFillTrashFill/>
                                                        <span>Видалити</span>
                                                    </Link>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Link 
                                                    className='bg-[#408692] text-white p-1 px-1 text-base font-semibold
                                                    hover:bg-[#33707a] duration-300 flex gap-1 items-center justify-center'
                                                    href={`/admin/testimonial/edit/${testimonial._id}`}>
                                                        <BsPencilSquare/>
                                                        <span>Редагувати</span>
                                                    </Link>
                                                </TableCell>
                                            </TableRow>
                                            )) : (
                                                <div className='flex items-center justify-center mx-auto'>
                                                    <Spinner/>
                                                </div>)
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                    </div>
            </div>
        </AdminLayout>
    </div>
  )
}

export default AdminTestimonialsList