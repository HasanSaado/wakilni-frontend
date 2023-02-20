// Pass error code api calls
const passErrorCodeApis: any = [];
let abortables: any = {};

/**
 *
 */
export function shouldPassErrorCode(apiCall: any) {
  return passErrorCodeApis.includes(apiCall);
}

/**
 *
 */
export function isAbortError(error: any) {
  return error === 'Aborted api call';
}

/**
 *
 */
export async function abortHandler({abortKey, request, fields}: any) {
  if (abortables.hasOwnProperty(abortKey)) {
    abortables[abortKey]();
  }

  // Call abortable api
  const { abort, call } = abortableRequest(
    request,
    fields
  );

  // Add abort function
  abortables[abortKey] = abort;

  // Get api result
  const result = await call();

  // Remove abort key
  delete abortables[abortKey];

  return result;
}

/**
 *
 */
export function abortableRequest(request: any, fields: any) {
  const controller = new AbortController();
  const signal = controller.signal;

  return {
    abort: () => controller.abort(),
    call: async () => request(fields, signal)
  };
}
