import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-indigo-600">Shinebayr Temuujin</div>
          <nav className="space-x-4">
            <a href="#about" className="text-indigo-600 hover:text-indigo-600">Обо мне</a>
            <a href="#portfolio" className="text-indigo-600 hover:text-indigo-600">Работы</a>
            <a href="#contact" className="text-indigo-600 hover:text-indigo-600">Контакты</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-indigo-600">Привет, я Тупой аутист</h1>
          <p className="mb-4 text-black">Я просто ахуенный челик который освоил на ебанутом уровне такие программы по типу <span className="text-orange-500 font-bold">Illustrator </span> 
  & <span className="text-indigo-500 font-bold">Photoshop </span> а также Figma также я ахуенно пишу код на <span className="text-orange-500 font-boldgit ">HTML </span> 
  & <span className="text-indigo-500 font-bold">CSS </span></p>
          <a href="mailto:youremail@example.com" className="text-white bg-indigo-600 px-4 py-2 rounded">Отсосать</a>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <img src="./man.png" alt="Моё фото" width={450} height={450} className="rounded-xl" />
        </div>
      </main>

    </div>
  );
}
