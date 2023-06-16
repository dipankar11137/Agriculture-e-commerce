import React from 'react';
import video from '../../../../Images/Video/Farm Animation _ Traditional farming _ Cartoon background animation _Animasi _ Agriculture bulls hut.mp4';
import '../../../CSS/BackgroundImage.css';

const BackgroundImage = () => {
  

  // https://static.dw.com/image/64115481_605.jpg
  return (
    <div>
      <video autoPlay muted loop src={video} className="videoEdit"></video>

      <div class="content mx-72">
        <div className="grid grid-cols-4">
          <div className="w-72 flex justify-center items-center">
            <div>
              <img
                className="ml-10 h-20 mb-10"
                src="https://ifarmer.asia/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdW84IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--965c07eb4d2495701c06699460ba04b3a75e275d/Farm%20Produce.png"
                alt=""
              />
              <h1 className="text-4xl font-extrabold pb-3">196 K Ton</h1>
              <h1 className="text-xl font-bold">Farm Produce Sold</h1>
            </div>
            <div
              style={{ width: '2px', height: '170px', marginLeft: '40px' }}
              className="bg-white text-white "
            ></div>
          </div>
          <div className="w-72 flex justify-center items-center">
            <div>
              <img
                className="ml-10 h-20 mb-10"
                src="https://ifarmer.asia/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdXM4IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--edb373094bd5b250ad4825e22ffbcf0f66b79769/Registered%20Retailers.png"
                alt=""
              />
              <h1 className="text-4xl font-extrabold pb-3">196000+</h1>
              <h1 className="text-xl font-bold ">Registered Retailers</h1>
            </div>
            <div
              style={{ width: '2px', height: '170px', marginLeft: '40px' }}
              className="bg-white text-white "
            ></div>
          </div>
          <div className="w-72 flex justify-center items-center">
            <div>
              <img
                className="ml-10 h-20 mb-10"
                src="https://ifarmer.asia/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1k4IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--02a6bd6e414908b6373f7519c6f0f1149f3e8a5a/Finance%20Facilitated.png"
                alt=""
              />
              <h1 className="text-4xl font-extrabold pb-3">BDT 2.14B</h1>
              <h1 className="text-xl font-bold">Finance Facilitated</h1>
            </div>
            <div
              style={{ width: '2px', height: '170px', marginLeft: '40px' }}
              className="bg-white text-white "
            ></div>
          </div>
          <div className="w-72 flex justify-center items-center">
            <div>
              <img
                className="ml-10 h-20 mb-10"
                src="https://ifarmer.asia/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWs4IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8cff554e1f12219abd116938ff74efa95556aa93/Registered%20Farmers.png"
                alt=""
              />
              <h1 className="text-4xl font-extrabold">9000+</h1>
              <h1 className="text-xl font-bold">Registered Farmers</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;