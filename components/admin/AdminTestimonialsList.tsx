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
            </div>
        </AdminLayout>
    </div>
  )
}

export default AdminTestimonialsList