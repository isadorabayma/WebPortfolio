interface TagProps {
  // handleClick: Function;
  section: String;
  z: string;
  rotate: String;
  margin: String;
}

export function Tag(props: TagProps) {
  return (
    <button 
      id="tag-sheet"
      // onClick={props.handleClick}
      className={`bg-stone-200 h-32 w-9 ${props.margin} rounded-r-md absolute right-12 2xl:left-10 ${props.z} ${props.rotate} m-12 border-[1px] border-l-0 border-gray-400 p-2`}
    >
      <div
        id="label-tag-sheet"
        className="-rotate-90 mt-14 -ml-4 border-t-4 w-10 border-gray-900"
      >
        { props.section }
      </div>
    </button>
  )
}