import './App.css';
import MoonIcon from './components/icons/MoonIcon.jsx';
import CrossIcon from './components/icons/CrossIcon';
function App() {
  return (
    <>
      <div className="container mx-auto max-w-[540px]">
        <header className="pt-[48px] md:pt-[70px]">
          <div className="flex flex-row justify-between">
            <h1 className="uppercase font-bold text-white text-3xl md:text-text-4xl tracking-[15px]">
              Todo
            </h1>
            <button className="shrink-0">
              <MoonIcon />
            </button>
          </div>
          <form className="mt-[40px] mb-[24px] w-full bg-white rounded-md py-[20px] px-[24px] overflow-hidden flex items-center gap-[24px]">
            <span className="rounded-full w-[24px] h-[24px] border-2 block shrink-0 border-gray"></span>
            <input
              className="w-full text-gray outline-none"
              type="text"
              placeholder="Create new todo..."
            ></input>
          </form>
        </header>
        <main>
          <div className="rounded-md bg-white [&>article]:py-[20px] [&>article]:px-[24px] [&>article]:gap-[24px] [&>article]:flex [&>article]:border-b-gray3  [&>article]:border-b">
            <article>
              <button className="flex-none">
                <span className="rounded-full w-[24px] h-[24px] border-2 block shrink-0 border-gray"></span>
              </button>
              <p className="grow text-purple">Complete JS course</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>

            <section className="flex py-[20px] px-[24px] justify-between text-gray text-sm">
              <span>5 task left</span>
              <div>
                <button className="font-bold">All</button>
                <button>Active</button>
                <button>Completed</button>
              </div>
              <button>Clear completed</button>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
