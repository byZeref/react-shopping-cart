import {LoadingIcon} from "@/components/icons/LoadingIcon.jsx";

export function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white bg-black/50">
      <LoadingIcon width="30" />
    </div>
  )
}