const LeetCodeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className || "w-5 h-5"}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.374 1.374 0 0 0 0 1.94l3.854 4.126 5.406 5.788a1.374 1.374 0 0 0 1.94 0l5.406-5.788 3.854-4.126a1.374 1.374 0 0 0 0-1.94l-3.854-4.126L14.44.438A1.374 1.374 0 0 0 13.483 0zm-2.866 12.815a1.374 1.374 0 1 1 0 2.748 1.374 1.374 0 0 1 0-2.748zm6.589 0a1.374 1.374 0 1 1 0 2.748 1.374 1.374 0 0 1 0-2.748z" />
    </svg>
  );
};

export default LeetCodeIcon;
