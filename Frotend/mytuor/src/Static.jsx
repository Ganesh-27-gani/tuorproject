import React, { useRef, useState } from 'react';
import world from './assets/images/world.png';
import hero1 from './assets/images/hero-img01.jpg';
import hero2 from './assets/images/hero-img02.jpg';
 
const herovideo = "/hero-video.mp4";

const Static = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '50px', padding: '40px', alignItems: 'center' }}>
      
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex'}}>
           <h6 className='rounded-pill ' style={{ alignItems: 'center', fontSize: '50px',fontFamily:"Monotype Corsiva Regular", backgroundColor:"#f99835",paddingLeft:"18px", paddingRight:"18px"}}>
          Know before you go  </h6>
        <img src={world} alt="world" style={{ width: '70px', marginLeft: '8px', fontSize: '50px' }} />
        </div>
       
        <h1 style={{ fontSize: '100px', marginTop: '20px', fontWeight: '800', fontFamily:"medium" }}>
          Travelling opens <br /> the doors to <br /> creating 
          <span style={{ color: '#f99835' }}> memories</span>
        </h1>
        <p style={{ marginTop: '15px', color: '#666', fontSize: '28px',}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequatur
          dolore nam modi labore facere id ut veniam itaque quasi, sunt unde? Mollitia
          id soluta animi repudiandae omnis quibusdam illo blanditiis possimus ex sint
          cupiditate corrupti labore non, qui est!
        </p>
      </div>
 
      <div style={{ display: 'flex', gap: '20px' }}>
        
        <img
          src={hero1}
          alt="img1"
          style={{
            width: '200px',
            height: '450px',
            objectFit: 'cover',
            borderRadius: '20px',
            border: '2px solid orange',
            marginBottom:"230px",
            marginRight:"20px"
          }}
        />
 
        <div
          style={{
            position: 'relative',
            width: '200px',
            height: '450px',
            overflow: 'hidden',
            borderRadius: '20px',
            border: '2px solid orange',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            marginTop:"40px",
             marginRight:"20px"
          }}
        >
          <video
            ref={videoRef}
            src={herovideo}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            muted
            loop
            playsInline
          />
          <button
            onClick={handleTogglePlay}
            style={{
              position: 'absolute',
              bottom: '15px',
              left: '15px',
              background: 'rgba(38, 37, 37, 0.6)',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '15px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
            }}
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>
        </div>

        
        <img
          src={hero2}
          alt="img2"
          style={{
            width: '200px',
            height: '450px',
            objectFit: 'cover',
            borderRadius: '20px',
            border: '2px solid orange',
            marginTop:"80px",
           
          }}
        />
      </div>
         
    </div>
  );
};

export default Static;
