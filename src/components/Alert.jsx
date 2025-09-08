export default function Alert({ onClose }) {
    return (
        <div className="flex flex-col gap-2 w-full sm:w-72 text-[10px] sm:text-xs absolute left-1/2 -translate-x-1/2 top-0 xl:-top-25 z-50">
            <div
                className="succsess-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg px-2 shadow-lg"
                style={{ background: 'var(--black)' }}
            >
                <div className="flex gap-2">
                    <div className="backdrop-blur-xl p-1 rounded-lg" style={{ color: 'var(--blue)' }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="3"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 12.75 6 6 9-13.5"
                            ></path>
                        </svg>
                    </div>
                    <p className="text-white self-center">Messaggio inviato con successo!</p>
                </div>
                <button
                    className="text-gray-400 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear cursor-pointer"
                    onClick={onClose}
                    aria-label="Chiudi avviso"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}