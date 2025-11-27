// src/pages/Project.jsx

import React from 'react';

function Project() {
  return (
    <div style={{ padding: '2rem' }}>
    <Route path="/project" element={<Navigate to="/home/" replace />} />
    </div>
  );
}
export default Project;