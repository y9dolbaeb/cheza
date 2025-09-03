import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-sky-50 min-h-screen">

      <header className="bg-white/75 backdrop-blur-md  shadow-sm sticky top-0 z-50 opacity-75 " >
        <div className=" mx-auto px-12 py-4 flex justify-between items-center ">
          <div className=" flex row justify-content items-center ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UOiHZq_kreTAbUxIpi8XntVxA5jhzPhKFw&s"
           alt="logo" width={50} height={50} className="rounded-xl"></img>
          <div className="font-bold text-xl text-blue-600 ml-6">Shinebayr Temuujin</div> 
          </div>
          <nav className="space-x-4 flex justify-center ">
            <a href="#about"     className="text-blue-600 text-xl hover:text-gray-300 font-medium">About me</a>
            <a href="#portfolio" className="text-blue-600 text-xl hover:text-gray-300 font-medium">My works</a>
            <a href="#contact"   className="text-blue-600 text-xl hover:text-gray-300 font-medium">My contacts</a>
            <a href="#contact"   className="text-blue-600 text-xl hover:text-gray-300 font-medium">My contacts</a>
          </nav>
          <button className="bg-blue-600 w-32 h-12 rounded-md">Let's contact</button>
        </div>
      </header>


      <main className="max-w-4xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-blue-600">Привет, я Тупой аутист</h1>
          <p className="mb-4 text-black">Я просто ахуенный челик который освоил на ебанутом уровне такие программы по типу <span className="text-orange-500 font-bold">Illustrator </span> 
            & <span className="text-blue-500 font-bold">Photoshop </span> а также <span className="text-red-600 font-bold">Figma</span> также я ахуенно пишу код на <span className="text-orange-500 font-bold ">HTML </span> 
            & <span className="text-blue-500 font-bold">CSS </span></p>
          <a  className="text-white bg-blue-600 px-4 py-2 rounded">Отсосать</a>
        </div>
 
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <img src="./man.png" alt="Моё фото" width={450} height={450} className="rounded-xl" />
        </div>
      </main>
      <div className="w-full h-48">

      </div>
      <main className="max-w-5xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-purple-600">Nest It School student</h1>
          <p className="mb-4 text-black">Целых пять лет я погружаюсь в мир 
            <span className="text-red-600 font-bold"> IT</span> в своей школе 💻,
             накапливая знания и оттачивая навыки программирования. Я свободно владею тремя языками — 
             <span className="text-rose-600 font-bold"> Русским </span>, 
             <span className="text-blue-600 font-bold"> Английским </span>
              и своим родным 
              <span className="text-sky-500 font-bold"> Монгольским </span> 
              , что открывает мне 
             двери для международных проектов и глобального общения в сфере технологий. 
             Я полон амбиций и готов к новым вызовам! 🚀  </p>
          <a  className="text-white bg-blue-600 px-4 py-2 rounded">Отсосать</a>
        </div>
 
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <img src="./man.png" 
          alt="Моё фото" width={450} height={450} className="rounded-xl" />
        </div>
      </main>
    </div>
  );
}
