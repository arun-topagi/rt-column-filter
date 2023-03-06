import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { omit, reduce, has } from 'underscore';

// context
import Filters from './Filters';
export { useFilters } from './Filters';

function index({ children }) {
  return (
    <Filters.Provider>{children}</Filters.Provider>
  )
}

export default index