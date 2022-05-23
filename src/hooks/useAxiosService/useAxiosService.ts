import { parseHttpError } from '@helpers/error/parseError';
import { useState, useCallback, useRef, useEffect } from 'react';

import type { ServiceHook, ServiceState } from './types';

export const useAxiosService = <ServiceArgs, ServiceData>({
  service,
  callServiceOnMount,
  initialServiceParams,
  initialData = [] as ServiceData,
  logError,
}: ServiceHook<ServiceArgs, ServiceData>) => {
  const [state, setState] = useState({
    isPending: false,
    data: initialData,
  } as ServiceState<ServiceData>);

  const { isPending, data, error } = state;

  const {
    current: { abort, signal },
  } = useRef(new AbortController());

  const requestService = useCallback(
    async (...args: ServiceArgs[]) => {
      setState((prevState) => ({
        ...prevState,
        isServicePending: true,
        error: undefined,
      }));
      try {
        const { data } = await service(signal, ...args);

        setState((prevState) => ({ ...prevState, data }));
      } catch (error) {
        console.log(error);
        const httpError = parseHttpError(error);

        setState((prevState) => ({ ...prevState, error: httpError }));

        logError && logError(httpError);
      } finally {
        setState((prevState) => ({ ...prevState, isServicePending: false }));
      }
    },
    [service],
  );

  useEffect(() => {
    if (callServiceOnMount) {
      if (initialServiceParams) {
        requestService(initialServiceParams);
      } else {
        requestService();
      }
    }

    return abort;
  }, [callServiceOnMount, requestService]);

  return {
    requestService,
    cancelRequest: abort,
    isPending,
    data,
    error,
  };
};
