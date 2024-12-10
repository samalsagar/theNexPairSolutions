import React from 'react'

function update() {
  return (
    <div className=''>
  <div className="relative font-[sans-serif]">
    {/* Image background */}
    <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0" style={{ backgroundImage: 'url("https://validthemes.net/site-template/softing/assets/img/banner/4.jpg")', backgroundAttachment: 'fixed' }} />
    
    {/* Black overlay */}
    <div className="absolute inset-0 bg-black opacity-50" />
    {/* Content */}
    <div className="min-h-[400px] relative z-20 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-white md:text-3xl text-3xl font-bold">STAY UPDATE WITH US</h3>
        <p className="text-gray-300 text-sm mt-6">Get the latest updates, news, and special offers straight to your inbox. Be the first to know about new features, promotions, and more. Join us today for helpful insights and updates!</p>

        <div className="max-w-lg mx-auto bg-gray-100 flex p-1 rounded-full text-left mt-12 border focus-within:border-gray-700">
          <input type='email' placeholder='Enter your email' className="w-full outline-none bg-transparent text-sm text-gray-800 px-4 py-3" />
          <button type='button' className="bg-gray-800 hover:bg-gray-700 transition-all text-white tracking-wide text-sm rounded-full px-6 py-3">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default update
