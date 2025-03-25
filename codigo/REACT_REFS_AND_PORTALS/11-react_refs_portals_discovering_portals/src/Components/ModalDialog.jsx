import { forwardRef, useImperativeHandle, useRef } from 'react';
import {createPortal} from 'react-dom';

const ModalDialog = forwardRef(function ModalDialog(
  { timeRemaining, onResetTimeRemaining, timeTarget },
  ref
) {
  const dialog = useRef();

  const userHasLost = timeRemaining <= 0;
  const timeRemainingFormatted = (timeRemaining / 1000).toFixed(2);
  const userScored = Math.round((1 - timeRemaining / (timeTarget * 1000)) * 100);
  const secondsText = timeTarget > 1 ? 'segundos' : 'segundo';
  const titleModal = userHasLost ? (
    <>¡Has perdido!</>
  ) : (
    <>
      Puntuación total: <strong>{userScored} / 100</strong>
    </>
  );
  const timerIsStoppedText = userHasLost ? (
    <>
      No has conseguido parar el tiempo antes del fin de la cuenta atrás.
      ¡Vuelve a probar suerte!
    </>
  ) : (
    <>
      Has parado el tiempo a falta de <strong>{timeRemainingFormatted}</strong>{' '}
      segundos
    </>
  );

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <>
      <dialog
        ref={dialog}
        className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-none rounded-lg p-8 bg-[#d7fcf8]'>
        <h2 className='font-mono text-center uppercase font-bold text-4xl mt-2 mb-2'>
          {titleModal}
        </h2>
        <p className='text-lg'>
          El contrareloj estaba pautado para finalizar en {timeTarget}{' '}
          {secondsText}
        </p>
        <p></p>
        <p className='text-lg'>{timerIsStoppedText}</p>
        <form
          action='dialog'
          onSubmit={onResetTimeRemaining}>
          <button
            className='mt-4 pt-2 pb-2 pl-4 pr-4 border-none 
            rounded-md bg-[#12352f] text-[#edfcfa] text-lg cursor-pointer hover:bg-[#051715]'>
            Cerrar
          </button>
        </form>
      </dialog>
    </>,
    document.getElementById('modal')
  );
});

export default ModalDialog;
