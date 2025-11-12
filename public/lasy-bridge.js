// Lasy Bridge Script - Melhora compatibilidade com RSC
(function() {
  'use strict';
  
  // Previne erros de fetch para URLs undefined
  const originalFetch = window.fetch;
  window.fetch = function(input, init) {
    if (!input || input === 'undefined') {
      console.warn('Fetch bloqueado para URL undefined');
      return Promise.reject(new Error('URL undefined bloqueada'));
    }
    return originalFetch.call(this, input, init);
  };
  
  // Melhora handling de RSC
  if (typeof window !== 'undefined') {
    window.__NEXT_RSC_CACHE__ = window.__NEXT_RSC_CACHE__ || new Map();
  }
})();