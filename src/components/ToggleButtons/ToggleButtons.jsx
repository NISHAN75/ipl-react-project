
const ToggleButtons = ({selectedCount,view ,setView}) => {

  return (
    <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between gap-4 py-4">
            <div className="text-lg text-black">
                <span className="font-bold uppercase">{view}</span>
            </div>  
            <div className="join border border-base-300 rounded-lg">
                <button
                className={`join-item btn btn-sm md:btn-md  ${
                    view === 'available' ? 'btn-primary' : 'btn-ghost'
                }`}
                onClick={() => setView('available')}
                >
                Available
                </button>
                
                <button
                className={`join-item btn btn-sm md:btn-md ${
                    view === 'selected' ? 'btn-primary' : 'btn-ghost'
                }`}
                onClick={() => setView('selected')}
                >
                Selected ({selectedCount})
                </button>
            </div>
        </div>
    </div>
  );
};

export default ToggleButtons;