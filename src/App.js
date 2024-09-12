import './App.css';
import moonIcon from './images/icon-moon.svg';

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
              <img
                src={moonIcon}
                alt="Moon Icon"
                className="w-6 h-6 inline-block"
              />
            </button>
          </div>
          <form className="mt-[40px] mb-[16px] w-full bg-white rounded-md py-[20px] px-[24px] overflow-hidden flex items-center gap-[24px]">
            <span className="rounded-full w-[24px] h-[24px] border-2 block shrink-0"></span>
            <input
              className="w-full text-gray outline-none"
              type="text"
              placeholder="Create new todo..."
            ></input>
          </form>
        </header>
        <main>
          <article className="flex bg-white rounded-md py-[20px] px-[24px]">
            <button>button</button>
            <p>Complete JS course</p>
            <button>x</button>
          </article>
          <section>
            <span>5 task left</span>
            <button>Clear completed</button>
          </section>
        </main>
        <section>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </section>
      </div>
    </>
  );
}

export default App;
