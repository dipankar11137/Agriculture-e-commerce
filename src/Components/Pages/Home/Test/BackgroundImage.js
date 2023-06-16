import React from 'react';
import video from '../../../../Images/Video/Farm Animation _ Traditional farming _ Cartoon background animation _Animasi _ Agriculture bulls hut.mp4';
import '../../../CSS/BackgroundImage.css';

const BackgroundImage = () => {
  

  // https://static.dw.com/image/64115481_605.jpg
  return (
    <div >
      <video autoPlay muted loop src={video} className='videoEdit'></video> 

<div class="content">
  <h1>Heading</h1>
  <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat oblique delicatissimi pro.</p>

</div></div>
 
  );
};

export default BackgroundImage;