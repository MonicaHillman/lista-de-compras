import { adicionarItem } from './scripts/adicionarItem.js';
import { verificarListaComprados } from './scripts/verificarListaComprados.js';

// Event listener para adicionar item
document.getElementById("adicionarBtn").addEventListener("submit", adicionarItem);

const comprados = document.getElementById("comprados")
verificarListaComprados(comprados);