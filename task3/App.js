import React from 'react';
import ColorPicker from './ColorPicker';

const App = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff','#F1FE1C','#45FFF9','#FD07E3'];

  return <ColorPicker colors={colors} />;
};

export default App;