import React from 'react'
import CustomerPlan from '../Components/customerplan';

import EcommerceHero from '../Components/createownpage';
import CarouselLogo from '../Components/carausel';
import FAQ from '../Components/faq';
import WhyTellyDesk from '../Components/howTowork';
import BookADemo from '../Components/bookademu';
import ManageSmarter from '../Components/manageSmarter';


function HomePage() {
  return (
   <>
   <ManageSmarter></ManageSmarter>
   <WhyTellyDesk></WhyTellyDesk>
   <BookADemo></BookADemo>
   <CustomerPlan></CustomerPlan>
   <CarouselLogo></CarouselLogo>
   <EcommerceHero></EcommerceHero>
   <FAQ></FAQ>
   
   
   </>
  )
}

export default HomePage;