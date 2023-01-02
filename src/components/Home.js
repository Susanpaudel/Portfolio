import React from 'react'

import { Hero } from './Hero';
import { Advantage } from './Advantage';
import { EduExp } from './EduExp';
import { HomeContact } from './HomeContact';


export const Home = () => {
  return (
    <div>
        <Hero />
        <Advantage/>
        <EduExp/>
        <HomeContact/>
    </div>
  )
}
