import React from 'react'
import Navbar from '../Navbar'
import HIWCompOne from '../../components/howitworkscomp/hiwcompone/HIWCompOne'
import HIWCompTwo from '../../components/howitworkscomp/hiwcomptwo/HIWCompTwo'
import HIWCompThree from '../../components/howitworkscomp/hiwcompthree/HIWCompThree'
import HIWCompFourth from '../../components/howitworkscomp/hiwcompfourth/HIWCompFourth'
import HIWCompFifth from '../../components/howitworkscomp/hiwcompfifth/HIWCompFifth'
import HIWCompSixth from '../../components/howitworkscomp/hiwcompsixth/HIWCompSixth'
import HIWCompSeventh from '../../components/howitworkscomp/hiwcompseventh/HIWCompSeventh'
import FAQ from '../../components/faq/FAQ'

export default function HowItWorks() {
  return (
    <div>
      <Navbar/>
      <HIWCompOne/>
      <HIWCompTwo/>
      <HIWCompThree/>
      <HIWCompFourth/>
      <HIWCompFifth/>
      <HIWCompSixth/>
      <HIWCompSeventh/>
      <FAQ/>
    </div>
  )
}