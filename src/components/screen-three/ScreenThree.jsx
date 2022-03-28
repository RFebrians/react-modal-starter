import React from 'react';

const ScreenThree = () => {
  return (
    <main className="app--screen screen--three">
      <h2>Screen Three</h2>

      <div style={{ display: 'flex', columnGap: '1rem' }}>
        <button type="button" data-modal="modal-one">
          Open Modal One
        </button>
        <button type="button" data-modal="modal-two">
          Open Modal Two
        </button>
        <button type="button" data-modal="modal-three">
          Open Modal Three
        </button>
      </div>
    </main>
  );
};

export default ScreenThree;
