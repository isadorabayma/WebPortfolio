interface ExpSectionProps {
  direction: String;

}

export function ExpSection({ direction }: ExpSectionProps) {
  return(
    <div className={`border-stone-800 border-${direction}-2 w-1/2 h-[38rem]`}></div>
  );
}