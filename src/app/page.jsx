import '../assets/style.css'

export default function Home() {
  return (
    <>
      <div id="home" className="grid grid-cols-2 min-h-screen text-base-content bg-base-200 px-25">
        <div className="flex flex-col min-h-screen justify-center items-end gap-y-2">
          <h1 className="text-4xl font-bold">Hi folks!</h1>
          <p>Welcome to my portfolio webpage <span>&#128075;</span>.</p>
          <button className="btn btn-primary">Let's begin!</button>
        </div>
        <div className="flex flex-row min-h-screen justify-center items-center">
          <div className="blob"></div>
        </div>
      </div>

      <div id="profile" className="min-h-screen text-base-content bg-base-200">
        <h1>Profile Section</h1>
      </div>

      <div id="resume" className="min-h-screen text-base-content bg-base-200">
        <h1>Resume Section</h1>
      </div>

      <div id="skills" className="min-h-screen text-base-content bg-base-200">
        <h1>Skills Section</h1>
      </div>

      <div id="contact" className="min-h-screen text-base-content bg-base-200">
        <h1>Contact Section</h1>
      </div>
    </>
  )
}
