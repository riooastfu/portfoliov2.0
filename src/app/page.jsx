import '../assets/style.css'
import profile from '../assets/img/iu.jpeg'


export default function Home() {
  return (
    <div class="container mx-auto">
      <div id='home' className="content h-screen flex flex-col justify-center items-center md:flex-row">
        <div class="relative w-96 -top-[50px] lg:top-[0px] lg:w-1/3">
          <svg className='blob scale-100' viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
            <defs>
              <clipPath id="shape">
                <path d="M450,290.5Q432,331,418,376.5Q404,422,356.5,426.5Q309,431,271,420.5Q233,410,199,403.5Q165,397,137,374.5Q109,352,63.5,325.5Q18,299,14,249Q10,199,37,157Q64,115,114,108.5Q164,102,195,60Q226,18,261.5,61.5Q297,105,337,107Q377,109,390.5,145.5Q404,182,436,216Q468,250,450,290.5Z" fill="#d1d8e0"></path>
              </clipPath>
            </defs>
            <image x="0" y="-20" width="100%" height="100%" clipPath="url(#shape)" xlinkHref="https://drive.google.com/uc?export=view&id=1TfQp6eHRBD0fq5p-nMwsMyHE2hL94B6y" preserveAspectRatio="none"></image>
          </svg>
        </div>
        <div class="relative text-center -top-[60px] lg:top-[0px] lg:w-1/3 lg:text-left">
          <h1 className="text-4xl font-bold">Hi folks!</h1>
          <p>Welcome to my portfolio webpage <span>&#128075;</span>.</p>
          <button className="btn-sm btn-primary rounded-full shadow-xl">Lets begin!</button>
        </div>
      </div>
    </div>
  )
}
