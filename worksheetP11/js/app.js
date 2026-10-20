import { state, inisialisasiState } from "./state.js";
import { render, inisialisasiStatis } from "./dom.js";
import { pasangPendengar } from "./events.js";

inisialisasiStatis();
inisialisasiState();
pasangPendengar();
render(state);
