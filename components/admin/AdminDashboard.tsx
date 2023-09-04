import React, { useState, useEffect } from 'react';
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
import Spinner from '../Spinner';
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";

const AdminDashboard = () => {
    const [travels, setTravels] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      axios.get("/api/travelsdata").then(response => {
          const travels = response.data.reverse();
          setTravels(travels);
          setLoading(false);
      });
      
  },  []);
  console.log(travels);
  return (
    <div
    className='text-center'
    >
      <h3
      className='font-bold text-2xl mt-6'
      >
        Подорожі
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
                                  Додати нову подорож
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
                                    <TableCell className='font-semibold'>Travel title</TableCell>
                                    <TableCell className='font-semibold'>Travel image</TableCell>
                                    <TableCell className='font-semibold' align="right">Delete</TableCell>
                                    <TableCell className='font-semibold' align="right">Edit</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {!loading ? travels?.map(travel => (
                                    <TableRow
                                        key={travel?._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                    <TableCell component="th" scope="row">
                                    {travel?.title}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Image src={travel?.img} alt="travelImg" width={40} height={40}/>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Link 
                                        className='bg-[#408692] text-white p-1 px-1 text-base font-semibold
                                        hover:bg-[#33707a] duration-300 flex gap-1 items-center justify-center'
                                        href={`/admin/travel/delete/${travel._id}`}>
                                            <BsFillTrashFill/>
                                            <span>Видалити</span>
                                        </Link>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Link 
                                        className='bg-[#408692] text-white p-1 px-1 text-base font-semibold
                                        hover:bg-[#33707a] duration-300 flex gap-1 items-center justify-center'
                                        href={`/admin/travel/edit/${travel._id}`}>
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
  )
}

export default AdminDashboard;