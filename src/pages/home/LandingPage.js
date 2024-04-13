import React from 'react'
import Navbar from '../Navbar'
import LandingFirstComp from '../../components/landingcomp/landingfirstcomp/LandingFirstComp'
import LandingSecondComp from '../../components/landingcomp/landingsecondcomp/LandingSecondComp'
import LandingThirdComp from '../../components/landingcomp/landingthirdcomp/LandingThirdComp'
import LandingFourthComp from '../../components/landingcomp/landingfourthcomp/LandingForuthComp'
import LandingFifthComp from '../../components/landingcomp/landingfifthcomp/LandingFifthComp'
import LandingSixthComp from '../../components/landingcomp/landingsixthcomp/LandingSixthComp'
import LandingSeventhComp from '../../components/landingcomp/landingseventhcomp/LandingSeventhComp'
import LandingEigthComp from '../../components/landingcomp/landingeigthcomp/LandingEigthComp'
import Footer from '../../components/footer/Footer'

export default function LandingPage() {
  return (
    <div>
     <Navbar />
     <LandingFirstComp/>
     <LandingSecondComp/>
     <LandingThirdComp/>
     <LandingFourthComp/>
     <LandingFifthComp/>
     <LandingSixthComp/>
     <LandingSeventhComp/>
     <LandingEigthComp/>
     <Footer/>
    </div>
  )
}