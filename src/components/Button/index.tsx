export default function Button({ label }: { label: string }) {
  return (
    <button className="bg-blue-500 text-white rounded-md px-4 py-1.5">
      {label}
    </button>
  );
}
