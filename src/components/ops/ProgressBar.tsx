export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="ops-progress" aria-label={`${value}% complete`}>
      <span style={{ width: `${value}%` }} />
    </div>
  );
}
