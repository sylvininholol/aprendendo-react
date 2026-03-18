function DoButton({ task, children, ...props }) {
  return (
    <button
      {...props}
      className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted ? "line-through" : ""}`}
    >
      {children}
    </button>
  );
}

export default DoButton;
