interface LoadableResponseProps {
  loadingResponse: string | {} | [];
  response: string;
}

export default function LoadableResponseDetail({
  loadingResponse,
  response,
}: LoadableResponseProps) {
  return (
    <>
      {response && (
        <div className="bg-slate-200 p-4">
          <pre className="text-sm leading-6 overflow-hidden">
            <code>
              {loadingResponse
                ? 'loading...'
                : JSON.stringify(response, null, 2)}
            </code>
          </pre>
        </div>
      )}
    </>
  );
}
