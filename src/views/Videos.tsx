import React from 'react'

const Videos = () => {
  return (
    <div id='video' className='pink'>
      <div className='container'>
        <div className='video-content'>
          <h1>Assistanshundbeteenden</h1>
          <p>
            Jag får ofta frågan hur jag klarar av att lämna ifrån mig hundarna jag har tränat. Jag var rädd själv när jag skulle lämna i från mig min första hund som jag haft i ett och ett halvt år och tränat. Den finaste lilla hunden i världen. Efter tredje dagen med samträning var jag tvungen att stanna på vägen hem och gråta och undrade vad jag gjorde. Skulle jag verkligen orka med det här att lämna iväg hund på hund? Dagen efter var den lilla pojken som hunden skulle vara hos med och när de gick tillsammans så försvann alla tvivel. Detta var absolut det jag skulle hålla på med. Sen väntar jag bara på den känslan igen till nästa hund.
          </p>
          <div className='video-section'>
            <div className='youtube-video-container'>
              <iframe 
                className='youtube-video'
                src="https://www.youtube.com/embed/Hni8y7VLaR8" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className='youtube-video-container'>
              <iframe 
                className='youtube-video'
                src="https://www.youtube.com/embed/gjiKFqc9z4Q" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className='youtube-video-container'>
              <iframe 
                className='youtube-video'
                src="https://www.youtube.com/embed/ve6EC08LaY8" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
  )
}

export default Videos