import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [len, setLen] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [len, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const refr = useRef(null)
  const copy = useCallback(() => {
    refr.current?.select();
    refr.current?.setSelectionRange(0, len);
    window.navigator.clipboard.writeText(password)
  }, [password])
  return (
    <>
      <section className="block m-auto mt-8 w-1/3 h-min rounded-lg shadow-2xl ">
        <div className="flex items-center rounded-lg justify-center bg-white px-4 py-5 sm:px-6 sm:py-10 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2"></div>
            <h2 className="text-2xl font-bold leading-tight text-black">
              Password Generator
            </h2>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <div className="mt-2">
                    <input
                      className="flex h-12 w-full rounded-md border text-center  bg-transparent px-3 py-2 text-lg placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      value={password}
                      placeholder="password"
                      ref={refr}
                      readOnly
                    />
                  </div>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className=" w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    onClick={copy}
                  >
                    copy
                  </button>
                  <button className="w-auto ml-1 pl-3 pr-3 bg-black rounded-full text-white"
                    id="reset" 
                    onClick={(e)=>{
                      e.preventDefault()
                      passwordGenerator()
                    }}>
                    <span className="material-symbols-outlined">
                      restart_alt
                    </span>
                  </button>
                </div>
                <div className="flex ">
                  <input
                    id="default-range"
                    type="range"
                    min={8}
                    max={20}
                    value={len}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-400 my-2"
                    onChange={(e) => {
                      setLen(e.target.value);
                    }}
                  ></input>
                  <label className="w-1/2 ml-3 text-center">
                    {" "}
                    Lenght : {len}
                  </label>
                </div>
              </div>
            </form>
            <div className="flex w-full py-3 px-16">
              <div className="block m-auto w-1/2 ">
                <input
                  type="checkbox"
                  id="numberInput"
                  defaultChecked={numberAllowed}
                  onChange={() => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />
                <label className="pl-2" htmlFor="numberInput">
                  Numbers
                </label>
              </div>
              <div className="block m-auto w-1/2 ">
                <input
                  type="checkbox"
                  id="characterInput"
                  defaultChecked={charAllowed}
                  onChange={() => {
                    setCharAllowed((prev) => !prev);
                  }}
                />
                <label className="pl-2" htmlFor="characterInput">
                  Characters
                </label>
              </div>
            </div>
          </div>
        </div>

      </section>

<footer class=" mx-auto w-1/2">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
        </div>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-700"><a href="https://github.com/TheProgrammerLucie" className="hover:underline">@TheProgrammerLucie</a></span>
    </div>
    </footer>


    </>
  );
}

export default App;
