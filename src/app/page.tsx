import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Простая навигация */}
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

      {/* Главный блок */}
      <main className="max-w-4xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-indigo-600">Привет, я Тупой аутист</h1>
          <p className="mb-4 text-black">Я фронтенд разработчик. Создаю простые и современные веб-приложения с использованием Next.js и Tailwind CSS.</p>
          <a href="mailto:youremail@example.com" className="text-white bg-indigo-600 px-4 py-2 rounded">Связаться</a>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <img src="https://i.pinimg.com/474x/4e/79/d8/4e79d8b711edc3022fc8e4dcdf9d12a5.jpg./" alt="Моё фото" width={250} height={250} className="rounded-xl" />
        </div>
      </main>

    </div>
  );
}
