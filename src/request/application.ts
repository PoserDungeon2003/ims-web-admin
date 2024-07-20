import { useQuery } from "@tanstack/react-query"
import request, { BASE_URL, setTokenHeader } from "./request"
import { ApplyApplicationForm, JobOpening } from "./types"

export function getOpenPosition(filter: object): Promise<JobOpening[]> {
  setTokenHeader()
  return request.get(`${BASE_URL}/job-positions?filter=${JSON.stringify(filter)}`, filter)
}

export const useGetOpenPosition = (filter: object) => {
  return useQuery<JobOpening[]>({
    queryKey: ['job-positions', filter],
    queryFn: () => getOpenPosition(filter),
  })
}

export function applyApplication(data: ApplyApplicationForm): Promise<any> {
  let formData = new FormData()
  // Check if the field is not empty or undefined before appending
  if (data.firstName) formData.append('firstName', data.firstName);
  if (data.lastName) formData.append('lastName', data.lastName);
  if (data.email) formData.append('email', data.email);
  if (data.phone) formData.append('phone', data.phone.toString());
  if (data.appliedTo) formData.append('appliedTo', data.appliedTo);

  // For files like resume and cover letter, check if they exist before appending
  if (data.resume) {
    formData.append('resume', data.resume[0]);
  }
  if (data.coverLetter) {
    // formData.append('coverLetter', data.coverLetter[0]);
  }
  return request.postMultiPart(`${BASE_URL}/applications`, formData)
}