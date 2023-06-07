import '../assets/style.css'
import profile from '../assets/img/iu.jpeg'


export default function Home() {
  return (
    <div class="container mx-auto">
      <div className="content h-screen flex flex-col justify-center items-center -z-10 relative -top-[45px] md:flex-row">
        <div class="relative w-96 lg:w-1/3">
          <svg className='blob' viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
            <defs>
              <clipPath id="shape">
                <path d="M423,283Q398,316,385.5,351.5Q373,387,336,394Q299,401,265,416Q231,431,196.5,417Q162,403,120.5,388.5Q79,374,67,332.5Q55,291,55.5,250Q56,209,78.5,175.5Q101,142,134.5,125Q168,108,197.5,68Q227,28,269.5,44Q312,60,343.5,85.5Q375,111,418,133.5Q461,156,454.5,203Q448,250,423,283Z" fill="#d1d8e0"></path>
              </clipPath>
            </defs>
            <image x="0" y="0" width="100%" height="100%" clip-path="url(#shape)" xlinkHref="https://drive.google.com/uc?export=view&id=1TfQp6eHRBD0fq5p-nMwsMyHE2hL94B6y" preserveAspectRatio="none"></image>
          </svg>
        </div>
        <div class="text-center lg:w-1/3 lg:text-left">
          <h1 className="text-4xl font-bold">Hi folks!</h1>
          <p>Welcome to my portfolio webpage <span>&#128075;</span>.</p>
          <button className="btn-sm btn-primary rounded-full shadow-xl">Lets begin!</button>
        </div>
      </div>
    </div>
  )
}
