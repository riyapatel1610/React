import React from 'react'
import { useNavigate } from 'react-router-dom';
import Fitter from '../../../Component/fitter/Fitter'
import banner from '../../../../assets/Images/allProduct_banner.webp'

export default function Allproduct() {
    const navigate = useNavigate();
  return (<>
    <img src={banner} alt="" />
    <Fitter/>
    </>
  )
}
