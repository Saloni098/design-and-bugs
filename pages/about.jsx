import Image from 'next/image';
import React from 'react';
import Nav from '../component/nav';


export default function About() {
  return (
    <div className='column1'>
      <Nav />
      <div className='child1'>
      <div className='rowm-about'>
      <Image src="/images/profile.jpeg" alt="about" width={399} height={399} className='me-img'/>
      <div className='about-text'>
      <h1 className='h2b-left'>About Me</h1>
      <p className="boday-grey"> I'm a <i>developer and product designer</i> based in <u>Kanpur, India.</u> 🇮🇳</p> 
      <p className='boday-about'>
        Hello, I'm Saloni Dwivedi. 👋 </p>
        
        <p className='boday-about'> I'm a full-stack product designer (and Developer) based in Kanpur, India. My journey into design is quite similar to many who transitioned to this field after being a software developer. </p>
      
        <p className='boday-about'>I've helped a startup to design and develop its website from scratch. I have worked with Figma, Design Thinking and Product Strategy.</p>
    
        <p className='boday-about'>My curiousity helps me to be open-minded towards feedback, filliing me with the eagerness to ask questions, and iterate towards a better product.
      </p>
      </div>
      </div>
      </div>
      </div>
  
  );
}
