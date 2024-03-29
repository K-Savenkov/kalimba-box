import { useWindowEvent } from '../../hooks/useWindowEvent.js';
import { useKalimba } from '../../hooks/useKalimba.js'
import { useRef } from 'react';
import { useWindowFocus } from '../../hooks/useWindowFocus.js';


type NoteButton = {
  listenKey: string,
  note: string,
  name: string,
}

const noteButtons: NoteButton[] = [
  {
    listenKey: "KeyQ",
    name: 'Q',
    note: 'D6',
  },
  {
    listenKey: "KeyA",
    name: 'A',
    note: "B5",
  },
  {
    listenKey: "KeyZ",
    name: 'Z',
    note: "B#5",
  },
  {
    listenKey: "KeyW",
    name: 'W',
    note: "G#5"
  },
  {
    listenKey: "KeyS",
    name: 'S',
    note: "E5"
  }, 
  {
    listenKey: "KeyX",
    name: 'X',
    note: "E#5"
  },
  {
    listenKey: "KeyE",
    name: 'E',
    note: "C#5"
  },
  {
    listenKey: "KeyD",
    name: 'D',
    note: "A4"
  },
  {
    listenKey: "KeyC",
    name: 'C',
    note: "A#4"
  },
  {
    listenKey: "KeyR",
    name: 'R',
    note: "F#4"
  },
  {
    listenKey: "KeyF",
    name: 'F',
    note: "D4"
  },
  {
    listenKey: "KeyV",
    name: 'V',
    note: "D#4"
  },
  {
    listenKey: "KeyT",
    name: 'T',
    note: "C#4"
  },
  {
    listenKey: "KeyG",
    name: 'G',
    note: "C3"
  },
  {
    listenKey: "KeyB",
    name: 'B',
    note: "C#3"
  },
  {
    listenKey: "KeyY",
    name: 'Y',
    note: "E#4"
  },
  {
    listenKey: "KeyH",
    name: 'H',
    note: "E3"
  },
  {
    listenKey: "KeyN",
    name: 'N',
    note: "E#3"
  },
  {
    listenKey: "KeyU",
    name: 'U',
    note: "E4"
  },
  {
    listenKey: "KeyJ",
    name: 'J',
    note: "G#4"
  },
  {
    listenKey: "KeyM",
    name: 'M',
    note: "B#4"
  },
  {
    listenKey: "KeyI",
    name: 'I',
    note: "B4"
  },
  {
    listenKey: "KeyK",
    name: 'K',
    note: "D5"
  },
  {
    listenKey: "Comma",
    name: ',',
    note: "D#5"
  },
  {
    listenKey: "KeyO",
    name: 'O',
    note: "F#5"
  },
  {
    listenKey: "KeyL",
    name: 'L',
    note: "A5"
  },
  {
    listenKey: "Period",
    name: '.',
    note: "A#5"
  },
  {
    listenKey: "KeyP",
    name: 'P',
    note: "C#6"
  },
  {
    listenKey: "Semicolon",
    name: ';',
    note: "E6"
  },
  {
    listenKey: "Slash",
    name: '/',
    note: "E#6"
  }
];

function KalimbaButtons() {
  const { kalimba } = useKalimba()
  const isFocused = useWindowFocus();
  const buttonsRefsMap = useRef<{ [key: NoteButton['note']]: HTMLButtonElement | null }>({});

  const onKalimbaPlay = (note: string) => kalimba?.play(note);

  useWindowEvent('keydown', (ev) => {
    const hasPressedKey = noteButtons.find((noteBtn) => noteBtn.listenKey === ev?.code)
    if (!hasPressedKey) return;

    onKalimbaPlay(hasPressedKey.note)
    buttonsRefsMap.current?.[hasPressedKey.note]?.blur()
    buttonsRefsMap.current?.[hasPressedKey.note]?.focus()
  })

  return (
    <div className="card">
      {!isFocused && <div className='lost-focus-message'>
        page is lost focus / key press is inactive <br />
        <b>Please click on the page to make it active</b>
      </div>}
      <div className="kalimba-layout">
        {noteButtons.map((noteButton) => (
          <button
            key={noteButton.listenKey}
            className="kalimba-btn"
            onMouseEnter={() => onKalimbaPlay(noteButton.note)}
            onKeyDown={(ev) => {
              if (ev.code === noteButton.listenKey) onKalimbaPlay(noteButton.note);
            }}
            ref={(el) => {
              if (buttonsRefsMap.current) {
                buttonsRefsMap.current[noteButton.note] = el
              }
            }}
          >
            <span className="key-name">{noteButton.name}</span>
            <span className="button-note">{noteButton.note}</span>
          </button>))}
      </div>
    </div>
  )
}

export default KalimbaButtons
