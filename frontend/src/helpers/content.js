import React from 'react';

export function renderContent(rawContent) {
  return <span dangerouslySetInnerHTML={{__html: rawContent}} />;
}

