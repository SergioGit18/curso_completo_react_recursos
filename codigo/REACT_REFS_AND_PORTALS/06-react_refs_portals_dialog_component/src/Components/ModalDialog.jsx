const ModalDialog = ({resultGame, timeTarget})=>{
    const secondsText = (timeTarget > 1 ? 'segundos' : 'segundo');
    return (
      <>
        <dialog
          open
          className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-none rounded-lg p-8 bg-[#d7fcf8]'>
          <h2 className='font-mono text-center uppercase font-bold text-4xl mt-2 mb-2'>
            ¡Has {resultGame}!
          </h2>
          <p className='text-lg'>
            El contrareloj estaba pautado para finalizar en {timeTarget}{' '}
            {secondsText}
          </p>
          <p>
            Has parado el tiempo a falta de <strong>X</strong> segundos
          </p>
          <form action='dialog'>
            <button
              className='mt-4 pt-2 pb-2 pl-4 pr-4 border-none 
            rounded-md bg-[#12352f] text-[#edfcfa] text-lg cursor-pointer hover:bg-[#051715]'>
              Cerrar
            </button>
          </form>
        </dialog>
      </>
    );
}

export default ModalDialog;