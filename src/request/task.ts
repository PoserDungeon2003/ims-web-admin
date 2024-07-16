import { useQuery } from "@tanstack/react-query"
import request, { BASE_URL, setTokenHeader } from "./request"

export async function GetCompletionRate(): Promise<number> {
  setTokenHeader()
  return request.get(`${BASE_URL}/tasks-management/completion-rate`)
}

export function useGetCompletionRate() {
  return useQuery<number>({
    queryKey: ['completion-rate'],
    queryFn: () => GetCompletionRate(),
  })
}