import { useRef, useState } from "react";
import ModalDialog from "./ModalDialog";


const Timer = ({title, time}) =>{

    const timer = useRef();
    const dialogModal = useRef();

    const [hasLooser, setHasLooser] = useState(false);
    const [hasStart, setHasStart] = useState(false);

    const handleStartTime = () => {
        setHasStart(true);
        timer.current = setTimeout(()=>{
            dialogModal.current.open();
            setHasStart(false);
            setHasLooser(true);
        }, time * 1000)
  
    }

    const handleStopTime = () => {
      setHasStart(false);
      clearInterval(timer.current);
    }

    return (
      <>
        <ModalDialog ref={dialogModal} resultGame="perdido" timeTarget={time}/>
        <section
          className='w-[22rem] flex flex-col items-center justify-center p-8 m-8 
            bg-[#691A1A] text-[##221c18] shadow-lg rounded-md'>
          <h2 className='text-xl tracking-wide text-center uppercase text-[#edfcfa] font-bold mb-2'>
            {title}
          </h2>
          {hasLooser && <p className='my-1 mb-3'>Has perdido</p>}
          <p className='border-[1px] border-solid border-[#46cebe] rounded px-2 py-1 m-'>
            {time} segundo{time > 1 ? 's' : ''}
          </p>
          <p
            className='mt-4 px-4 py-2 border-none rounded-md bg-[#12352f] text-[#edfcfa] 
        text-lg cursor-pointer hover:bg-[#051715]'>
            <button onClick={hasStart ? handleStopTime : handleStartTime}>
              {hasStart ? 'Parar' : 'Empezar'}
            </button>
          </p>
          <p className=''></p>
        </section>
      </>
    );
}

export default Timer;