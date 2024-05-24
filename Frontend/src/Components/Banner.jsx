import banner from '../assets/banner.jpg'
const Banner = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
            <div className="space-y-12">
              <h1 className="text-4xl bold">Hello, welcome here to learn something <span className="text-pink-500">new everyday!!!</span></h1>
              <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nulla, optio voluptatibus quam laborum fugit, nesciunt, doloribus reprehenderit corrupti quod ipsam dolores necessitatibus iste nemo rerum voluptas hic voluptatum. Similique?</p>
            <label className="input input-bordered flex items-center gap-2 mr-10">
              Email<input type="text" className="grow" placeholder="email@site.com" />
            </label>
            </div>
            <button className="mt-6 btn btn-active btn-secondary">Secondary</button>
        </div>
        <div className=" order-1 w-full md:w-1/2">
          <img src={banner} className='w-auto h-90' alt="books image" />
        </div>
    </div>
    </>
  )
}

export default Banner