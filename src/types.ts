export type Note = "A" | "B" | "C" | "D" | "E" | "F" | "G";

export type Pitch = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface Octave {
  note: Note
  pitch: Pitch
  semitone?: boolean
  name: string
}

export type NoteButton = {
  listenKey: string,
  name:string,
  note: Octave['name'],
}