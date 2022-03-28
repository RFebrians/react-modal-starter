import React from 'react';

const ScreenTwo = () => {
  return (
    <main className="app--screen screen--two">
      <h2>Screen Two</h2>

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

export default ScreenTwo;
