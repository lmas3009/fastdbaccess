import { useEffect } from "react";

const Slider = ({setStorage,data}) => {
  useEffect(() => {
    const range = document.getElementById("range"),
      tooltip = document.getElementById("tooltip"),
      setValue = () => {
        const newValue = Number(
            ((range.value - range.min) * 100) / (range.max - range.min)
          ),
          newPosition = 16 - newValue * 0.32;
        tooltip.innerHTML = `<span> ${range.value} MB</span>`;
        tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
        document.documentElement.style.setProperty(
          "--range-progress",
          `calc(${newValue}% + (${newPosition}px))`
        );
      };
    document.addEventListener("DOMContentLoaded", setValue);
    range.addEventListener("input", setValue);
    setValue();
  });

  return (
    <>
      <div>
        <div className="lg:max-w-[452px] md:max-w-[343px] w-full flex items-start justify-start">
          <div className="lg:max-w-[452px] md:max-w-[343px] w-full mx-auto container">
            <div className="range-slider">
              <div id="tooltip" className="p-2" />
              <input
                id="range"
                className="rounded text-sm border-2 border-slate-500 p-5 bg-white text-black"
                type="range"
                step={0.1}
                defaultValue={1}
                min={1}
                max={data?.StorageSize}
                onChange={(e)=>setStorage(e.target.value)}
              />
            </div>
          </div>
        </div>

        <style>
          {`
  body{
    background:rgb(243 244 246);
}

.range-slider{
    width: 100%;
    margin: 0 auto;
    position: relative;
    margin-top: 2.5rem;
    margin-bottom: 2rem;
}

#range { -webkit-appearance: none; width: 100%; }
#range:focus { outline: none; }

#range::before, #range::after {
    position: absolute;
    top: 2rem;
    color: #333;
    font-size: 14px;
    line-height: 1;
    padding: 3px 5px;
    background-color: rgba(0,0,0,.1);
    border-radius: 4px;
  
}


#range::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    cursor: pointer;
    animate: 0.2s;
    background: linear-gradient(90deg, rgb(67 56 202) var(--range-progress), #dee4ec var(--range-progress));
    /* background-color: rgb(67 56 202); */
    border-radius: 1rem;
}
#range::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 0.25rem solid white;
    /* box-shadow: 0 1px 3px rgba(0,0,255,.3); */
    border-radius: 50%;
    background:rgb(55 48 163);
    cursor: pointer;
    height: 24px; width: 24px;
    transform: translateY(calc(-50% + 5px));
}

#tooltip {
    position: absolute;
    bottom: 75px;
}
#tooltip span {
    position: absolute;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 16px;
    padding: 0.125rem 0.25rem;
    padding: 10px;
    color: white;
    border-radius: 0.125rem;
    border-radius: 10px;
    background: #0A2D28; 
    font-size: 15px;
    left: -40%;
    width: max-content;
    height: 33px;
    transform: translate(-50%, 0);
}
#tooltip span:before {
    position: absolute;
    content: "";
    left: 50%; bottom: -8px;
    transform: translateX(-50%);
    width: 0; height: 0;
    border: 4px solid transparent;
    border-top-color: white;
}

@media  (max-width: 768px) {
#tooltip span {
    position: absolute;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 16px;
    color: white;
    border-radius: 0.125rem;
    border-radius: 10px;
    background: #0A2D28;
    font-size: 14px;
    left: -40%;
    width: max-content;
    height: 33px;
    // transform: translate(-50%, 0);
    top: 12px;
}
}

  `}
        </style>
      </div>
    </>
  );
};

export default Slider;
