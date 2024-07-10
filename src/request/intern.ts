import { useQuery } from "@tanstack/react-query"
import request, { BASE_URL, setTokenHeader } from "./request"

export async function GetCompletionRate(): Promise<number> {
  setTokenHeader()
  return request.get(`${BASE_URL}/users/count`)
}

export function useGetCompletionRate() {
  return useQuery({
    queryKey: ['completion-rate'],
    queryFn: GetCompletionRate,
  })
}