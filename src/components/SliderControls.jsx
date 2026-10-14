import { ArrowlLeft, ArrowRight } from "lucide-react"

export default function SliderControls() {
    return (
      <div className="mt-8 flex items-center gap 3" role="group" aria-label="Controles do slider">
        <button type="button" aria-label="Imagem anterior">
          ←
        </button>
        <button type="button" aria-label="Próxima imagem">
          →
        </button>
        <span aria-live="polite">03 / 05</span>
      </div>
    );
  }