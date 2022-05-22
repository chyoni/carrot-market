import { useState } from 'react';

interface UseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}

type UseMutationResult = [(data: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutationResult {
  const [state, setState] = useState<{
    loading: boolean;
    data: undefined | any;
    error: undefined | any;
  }>({
    loading: false,
    data: undefined,
    error: undefined,
  });

  function mutation(data: any) {
    setState((prevState) => ({ ...prevState, loading: true }));
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        setState((prevState) => ({ ...prevState, data: json }));
      })
      .catch((err) => setState((prevState) => ({ ...prevState, error: err })))
      .finally(() =>
        setState((prevState) => ({ ...prevState, loading: false }))
      );
  }
  return [mutation, state];
}
