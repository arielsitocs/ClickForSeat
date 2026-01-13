interface LoaderProps {
  status: boolean;
  setStatus: (status: boolean) => void;
  fullScreen?: boolean;
}

export default function Loader({ status, setStatus, fullScreen }: LoaderProps) {
  return (
    status ?
      <div className={fullScreen ? "flex items-center justify-center w-full h-full fixed top-0 left-0 z-50 bg-black bg-opacity-50" : "flex items-center justify-center w-full h-full mt-10 mb-10"}>
        <div className="animate-spin rounded-full h-15 w-15 border-t-4 border-b-4 border-white"></div>
      </div>
      : null
  )
}