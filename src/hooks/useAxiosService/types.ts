import type { HttpError } from '@helpers/error/types';
import type { AxiosResponse } from 'axios';

type Service<ServiceArgs, ServiceData> = (
  signal: AbortSignal,
  ...args: ServiceArgs[]
) => Promise<AxiosResponse<ServiceData>>;

interface ServiceHook<ServiceArgs, ServiceData> {
  service: Service<ServiceArgs, ServiceData>;
  callServiceOnMount: boolean;
  initialServiceParams?: ServiceArgs;
  initialData?: ServiceData;
  logError?: (error: HttpError) => void;
}

interface ServiceState<ServiceData> {
  isPending: boolean;
  data: ServiceData;
  error?: HttpError;
}

export type { Service, ServiceHook, ServiceState };
