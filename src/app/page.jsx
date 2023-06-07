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
          <svg className='line-blob absolute -top-[10px] -z-10' viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
            <path d="M363.5,267Q356,284,370,315.5Q384,347,370.5,372Q357,397,320,375Q283,353,266.5,359Q250,365,214.5,417.5Q179,470,161,433.5Q143,397,128.5,373Q114,349,84,331.5Q54,314,74.5,282Q95,250,68,216Q41,182,90.5,176Q140,170,125.5,114.5Q111,59,162,97Q213,135,231.5,77.5Q250,20,285,27Q320,34,355.5,45Q391,56,402.5,93.5Q414,131,406.5,166.5Q399,202,385,226Q371,250,363.5,267Z" fill="none" stroke-width="7px" stroke="#000"></path>
          </svg>
        </div>
        <div class="relative text-center -top-[60px] lg:top-[0px] lg:w-1/3 lg:text-left">
          <h1 className="text-4xl font-bold">Hi folks!</h1>
          <p>Welcome to my portfolio webpage <span>&#128075;</span>.</p>
          <button className="btn-sm btn-primary rounded-full shadow-xl">Lets begin!</button>
        </div>
      </div>

      <div id='profile' className="content h-screen flex flex-col justify-center items-center md:flex-row">
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
