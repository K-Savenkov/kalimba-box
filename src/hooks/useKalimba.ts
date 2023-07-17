import { useEffect, useState } from "react";
import { getInstruments, NotePlayer } from "mobx-music";

import { useIsMounted } from "./useIsMounted";

const KALIMBA_INSTRUMENT_NAME = "kalimba";

export function useKalimba (): {kalimba: null | NotePlayer} {
  const [kalimba, setKalimba] = useState<NotePlayer|null>(null);

  const isMounted = useIsMounted();

  useEffect(() => {
    (async () => {
      const { instruments } = await getInstruments([KALIMBA_INSTRUMENT_NAME]);
      const kalimbaLoaded = instruments.get(KALIMBA_INSTRUMENT_NAME)
      if (!isMounted.current || !kalimbaLoaded) {
        return;
      } 
      
      setKalimba(() => kalimbaLoaded);

    })();
  }, [isMounted]);

  return { kalimba };
}
